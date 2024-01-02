import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere018: THREE.Mesh
    Sphere018_1: THREE.Mesh
  }
  materials: {
    ['Orange.008']: THREE.MeshStandardMaterial
    GreenDark: THREE.MeshStandardMaterial
  }
}

export const Pumpkin = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/pumpkin.gltf') as GLTFResult
  return (
    <RigidBody colliders="trimesh" mass={0.01}>
      <group {...props} dispose={null}>
        <group position={[0, 4.212, 0]} scale={1.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere018.geometry}
            material={materials['Orange.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere018_1.geometry}
            material={materials.GreenDark}
          />
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/pumpkin.gltf')
