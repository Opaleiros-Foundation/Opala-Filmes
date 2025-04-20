'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef } from 'react'

function FloatingEmoji({ position, emoji, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
  })

  return (
    <group ref={meshRef} position={position}>
      <Html transform scale={scale}>
        <div style={{ fontSize: '2em' }}>{emoji}</div>
      </Html>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[-10, 10, 5]} intensity={2} color="#0BDB72" />
      <pointLight position={[10, -10, 5]} intensity={2} color="#0BDB72" />

      {/* Emoji superior esquerdo - mais abaixo */}
      <FloatingEmoji 
        position={[-18, 2, 0]} 
        emoji="🎬"
        scale={2}
      />
      {/* Emoji superior direito - mais abaixo */}
      <FloatingEmoji 
        position={[18, 2, 0]} 
        emoji="🎥"
        scale={2}
      />
      {/* Emoji inferior esquerdo */}
      <FloatingEmoji 
        position={[-18, -8, 0]} 
        emoji="⭐"
        scale={1.5}
      />
      {/* Emoji inferior direito */}
      <FloatingEmoji 
        position={[18, -8, 0]} 
        emoji="🎭"
        scale={1.5}
      />
    </>
  )
}

export function Background3D() {
  return (
    <div className="background-3d">
      <Canvas
        camera={{ 
          position: [0, 0, 20],
          fov: 75,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <Scene />
        <fog attach="fog" args={['#1A1B26', 25, 45]} />
      </Canvas>
    </div>
  )
}