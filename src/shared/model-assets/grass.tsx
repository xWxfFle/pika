import { useTexture } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { RepeatWrapping } from 'three'

export const Grass = () => {
  const textures = useTexture(
    {
      roughnessMap: '/Grass001_1K_Roughness.jpg',
      normalMap: '/Grass001_1K_Normal.jpg',
      aoMap: '/Grass001_1K_AmbientOcclusion.jpg',
      displacementMap: '/Grass001_1K_Displacement.jpg',
      map: '/Grass001_1K_Color.jpg',
    },
    (loader) => {
      for (const texture of Object.values(loader) as THREE.Texture[]) {
        texture.wrapS = RepeatWrapping
        texture.wrapT = RepeatWrapping
        texture.repeat.set(100, 100)
      }
    },
  )
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial {...textures} />
      </mesh>
    </RigidBody>
  )
}
