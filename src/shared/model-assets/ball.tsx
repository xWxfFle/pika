/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere000: THREE.Mesh
    Sphere000_1: THREE.Mesh
    Sphere000_2: THREE.Mesh
    Sphere000_3: THREE.Mesh
  }
  materials: {
    ['White.008']: THREE.MeshStandardMaterial
    ['Blue.004']: THREE.MeshStandardMaterial
    ['Red.003']: THREE.MeshStandardMaterial
    ['Yellow.012']: THREE.MeshStandardMaterial
  }
}

export const Ball = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/ball.gltf') as GLTFResult
  return (
    <RigidBody mass={0.001} colliders="hull">
      <group {...props} dispose={null} position={[4, 0.65, 0]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere000.geometry}
          material={materials['White.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere000_1.geometry}
          material={materials['Blue.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere000_2.geometry}
          material={materials['Red.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere000_3.geometry}
          material={materials['Yellow.012']}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/ball.gltf')
