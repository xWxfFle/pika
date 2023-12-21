import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Pickachu } from '@/shared/model-assets'

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Canvas className="w-full h-full bg-indigo-800">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Pickachu />
          <Environment
            files="/industrial_sunset_02_puresky_1k.hdr"
            background
            blur={0.1}
          />
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
