import { Environment, KeyboardControls, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
import { Suspense, useState } from 'react'
import { Ball } from '@/shared/model-assets/ball'
import { Farm } from '@/shared/model-assets/farm'
import { Pika } from '@/shared/model-assets/pika'
import { Pumpkin } from '@/shared/model-assets/pumpkin'

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
  const [paused, setPaused] = useState(true)
  return (
    <div className="h-[100dvh]">
      <EcctrlJoystick />
      <Canvas className="w-full h-full" onClick={() => setPaused(false)}>
        <Suspense>
          <ambientLight intensity={0.5} />
          {paused && (
            <Text
              color="#2f2f2f"
              scale={0.3}
              position={[0, 1.5, 0]}
              rotation={[0, Math.PI, 0]}
            >
              Click me to start
            </Text>
          )}
          <Physics timeStep="vary" paused={paused}>
            <KeyboardControls map={keyboardMap}>
              {/* @ts-expect-error waiting fix :( */}
              <Ecctrl floatHeight={0} animated position={[0, 0.64, 0]}>
                <Pika />
              </Ecctrl>
            </KeyboardControls>
            <Farm />
            <Pumpkin />
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
