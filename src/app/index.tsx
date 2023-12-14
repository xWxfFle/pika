import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Pickachu } from '@/shared/model-assets'

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Suspense fallback={null}>
        <Canvas className="w-full h-full">
          <Stage>
            <Pickachu />
          </Stage>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  )
}
