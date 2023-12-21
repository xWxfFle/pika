import {
  ContactShadows,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Loader,
  OrbitControls,
  TransformControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import { Pika } from '@/shared/model-assets'

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 2] }}>
        <Suspense>
          <ambientLight intensity={0.5} />
          <Physics gravity={[0, 1, 0]} colliders={false} debug>
            <Pika />
            <group position={[0, -0.05, 0]}>
              <ContactShadows blur={2} />
            </group>
          </Physics>

          <Environment
            files="/industrial_sunset_02_puresky_1k.hdr"
            background
            blur={0.1}
          />
          <OrbitControls enablePan={false} />
        </Suspense>
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
      </Canvas>
      <Loader />
    </div>
  )
}
