'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'

function FloatingEmoji({ position, emoji, scale = 1 }) {
  const meshRef = useRef()
  const [adjustedPosition, setAdjustedPosition] = useState(position)

  useEffect(() => {
    function updatePosition() {
      const width = window.innerWidth
      let xScale = 1
      
      if (width <= 768) { // Mobile
        xScale = 0.4
      } else if (width <= 1024) { // Tablet
        xScale = 0.6
      } else { // Desktop
        xScale = 1
      }

      setAdjustedPosition([position[0] * xScale, position[1], position[2]])
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [position])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = adjustedPosition[1] + Math.sin(time * 0.5) * 0.3
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
  })

  return (
    <group ref={meshRef} position={adjustedPosition}>
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

      {/* Emojis com posições ajustadas */}
      <FloatingEmoji 
        position={[-12, 2, 0]} 
        emoji="🎬"
        scale={2}
      />
      <FloatingEmoji 
        position={[12, 2, 0]} 
        emoji="🎥"
        scale={2}
      />
      <FloatingEmoji 
        position={[-12, -8, 0]} 
        emoji="⭐"
        scale={1.5}
      />
      <FloatingEmoji 
        position={[12, -8, 0]} 
        emoji="🎭"
        scale={1.5}
      />
    </>
  )
}

export function Background3D() {
  const [fov, setFov] = useState(75)

  useEffect(() => {
    function updateFov() {
      if (window.innerWidth <= 768) {
        setFov(90) // Aumenta o FOV em telas menores
      } else {
        setFov(75)
      }
    }

    updateFov()
    window.addEventListener('resize', updateFov)
    return () => window.removeEventListener('resize', updateFov)
  }, [])

  return (
    <div className="background-3d">
      <Canvas
        camera={{ 
          position: [0, 0, 20],
          fov: fov,
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