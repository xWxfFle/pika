import { Environment, KeyboardControls, Plane, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
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
      <EcctrlJoystick />
      <Canvas
        className="w-full h-full"
        // onPointerDown={(e) => {
        //   if (e.pointerType === 'mouse') {
        //     e.target.requestPointerLock()
        //   }
        // }}
      >
        <Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight
            intensity={0.7}
            color="#FFFFED"
            castShadow
            shadow-bias={-0.0004}
            position={[-20, 20, 20]}
            shadow-camera-top={20}
            shadow-camera-right={20}
            shadow-camera-bottom={-20}
            shadow-camera-left={-20}
          />
          <Physics timeStep="vary" debug>
            <KeyboardControls map={keyboardMap}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore-next-line */}
              <Ecctrl floatHeight={0}>
                <Pika position={[0, -0.55, 0]} />
              </Ecctrl>
            </KeyboardControls>
            <RigidBody restitution={2} />
            <RigidBody type="fixed" colliders="trimesh">
              <group position={[0, -3, 0]} />
              <Plane
                args={[100, 100]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
                castShadow
              >
                <meshPhongMaterial opacity={0} transparent />
              </Plane>
            </RigidBody>
            <RigidBody colliders="ball" mass={2}>
              <Sphere position={[3, 0, 3]} args={[0.5]}>
                <meshStandardMaterial color="hotpink" />
              </Sphere>
            </RigidBody>
          </Physics>

          <Environment
            files="/industrial_sunset_02_puresky_1k.hdr"
            background
            blur={0.1}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
