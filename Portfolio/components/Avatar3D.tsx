'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

interface AvatarModelProps {
  mousePosition: { x: number; y: number }
}

function AvatarModel({ mousePosition }: AvatarModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/models/avatar.glb')
  const { actions } = useAnimations(animations, group)
  const { viewport, size } = useThree()
  const [targetRotation, setTargetRotation] = useState(0)
  const [scale, setScale] = useState(0.8)

  useEffect(() => {
    // Jouer toutes les animations disponibles
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.play()
        }
      })
    }
  }, [actions])

  useEffect(() => {
    // Calculer la rotation basée sur la position de la souris
    const normalizedX = (mousePosition.x / size.width) * 2 - 1
    const targetY = normalizedX * Math.PI * 0.3 // Rotation maximale de 30% de PI
    setTargetRotation(targetY)
    
    // Ajuster l'échelle selon la taille de l'écran
    const newScale = size.width < 640 ? 0.6 : size.width < 1024 ? 0.7 : size.width < 1920 ? 0.8 : size.width < 2560 ? 0.9 : 1.0
    setScale(newScale)
  }, [mousePosition, size])

  useFrame((state, delta) => {
    if (group.current) {
      // Interpolation douce vers la rotation cible
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        delta * 3
      )
      
      // Légère animation de flottement
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}

export default function Avatar3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    // Définir le DPR de manière sûre
    if (typeof window !== 'undefined') {
      setDpr(Math.min(window.devicePixelRatio || 1, 2))
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-[100vw] mx-auto h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] 3xl:h-[900px] 4xl:h-[1000px] overflow-visible px-1 xs:px-2 sm:px-3 md:px-4 lg:px-8 xl:px-12 3xl:px-24 4xl:px-32" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <Canvas
        camera={{ position: [0, 0.5, 14], fov: 22 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, dpr]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00f0ff" />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
          <AvatarModel mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  )
}


