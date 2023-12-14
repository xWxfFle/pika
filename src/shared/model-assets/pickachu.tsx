/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LessaB3D (https://sketchfab.com/lessaB3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pikachu-80a2480769a642b4bed0f653b448689b
Title: Pikachu
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_Pikachu_0: THREE.Mesh
    Cube004_Pikachu_0: THREE.Mesh
    Cube005_Pikachu_0: THREE.Mesh
    Cube006_Pikachu_0: THREE.Mesh
    Cube007_Pikachu_0: THREE.Mesh
    Spiral_RAio_0: THREE.Mesh
    Cube011_Material_0: THREE.Mesh
    Cube012_Pikachu_0: THREE.Mesh
    Cube013_Pikachu_0: THREE.Mesh
    Plane_Material001_0: THREE.Mesh
    Cube014_Eyes_0: THREE.Mesh
  }
  materials: {
    Pikachu: THREE.MeshPhysicalMaterial
    RAio: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
  }
}

export const Pickachu = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/pikachu.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[0, 180.744, -18.634]}
          rotation={[-1.015, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[-77.537, 9.265, -13.76]}
          rotation={[-Math.PI / 2, 0, 0.259]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[-44.111, 165.031, -35.27]}
          rotation={[0.764, 0.462, -0.228]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[-46.142, 271.626, 32.694]}
          rotation={[-0.277, -0.316, -0.96]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[-1.968, 45.406, -97.412]}
          rotation={[-1.386, -0.128, 0.511]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral_RAio_0.geometry}
          material={materials.RAio}
          position={[0, 101, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_Material_0.geometry}
          material={materials.Material}
          position={[39.577, 207.39, 73.477]}
          rotation={[-1.081, -0.095, 0.574]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[69.098, 185.677, 40.535]}
          rotation={[-0.935, 0.063, 1.139]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_Pikachu_0.geometry}
          material={materials.Pikachu}
          position={[-0.123, 180.833, 90.846]}
          rotation={[-1.373, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, 162.54, -112.953]}
          rotation={[-2.812, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_Eyes_0.geometry}
          material={materials.Eyes}
          position={[34.244, 207.417, 79.381]}
          rotation={[-1.042, -0.235, 0.41]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/pikachu.glb')