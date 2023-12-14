import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Pickachu } from '@/shared/model-assets'

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Canvas className="w-full h-full bg-cyan-900">
        <Suspense fallback={null}>
          <Stage>
            <Pickachu />
          </Stage>
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
