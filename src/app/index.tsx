import { Environment, KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
import { Suspense } from 'react'
import { Ball } from '@/shared/model-assets/ball'
import { Grass } from '@/shared/model-assets/grass'
import { Pika } from '@/shared/model-assets/pika'
import { Stones } from '@/shared/model-assets/stones'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'action1', keys: ['KeyE'] },
]

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <EcctrlJoystick />
      <Canvas className="w-full h-full">
        <Suspense>
          <ambientLight intensity={0.5} />
          <Physics timeStep="vary">
            <KeyboardControls map={keyboardMap}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore-next-line */}
              <Ecctrl floatHeight={0} animated>
                <Pika position={[0, -0.55, 0]} />
              </Ecctrl>
            </KeyboardControls>
            <Grass />
            <Stones />
            <Ball />
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
