import {
  ContactShadows,
  Environment,
  GizmoHelper,
  GizmoViewport,
  KeyboardControls,
  Loader,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl from 'ecctrl'
import { Suspense } from 'react'
import { Pika } from '@/shared/model-assets'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
]

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 2] }}>
        <Suspense>
          <ambientLight intensity={0.5} />
          <Physics timeStep="vary" debug>
            <KeyboardControls map={keyboardMap}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore-next-line */}
              <Ecctrl>
                <Pika position={[0, -0.55, 0]} />
              </Ecctrl>
            </KeyboardControls>
            <RigidBody restitution={2} />

            <RigidBody type="fixed" colliders="trimesh">
              <group position={[0, -0.05, 0]}>
                <ContactShadows blur={2} />
              </group>
            </RigidBody>
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
