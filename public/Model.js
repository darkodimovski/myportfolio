import { useFrame } from "@react-three/fiber"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = -0.1 - (0.1 + Math.sin(t / 2.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y += 0.007;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[592.87, -6673.64, 11555.79]} rotation={[-Math.PI / 2, 0, 0]} scale={5.14}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_141.geometry}
              material={nodes.Object_141.material}
              skeleton={nodes.Object_141.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_143.geometry}
              material={nodes.Object_143.material}
              skeleton={nodes.Object_143.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_144.geometry}
              material={nodes.Object_144.material}
              skeleton={nodes.Object_144.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_146.geometry}
              material={nodes.Object_146.material}
              skeleton={nodes.Object_146.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_148.geometry}
              material={nodes.Object_148.material}
              skeleton={nodes.Object_148.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_150.geometry}
              material={nodes.Object_150.material}
              skeleton={nodes.Object_150.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_151.geometry}
              material={nodes.Object_151.material}
              skeleton={nodes.Object_151.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_153.geometry}
              material={nodes.Object_153.material}
              skeleton={nodes.Object_153.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_154.geometry}
              material={nodes.Object_154.material}
              skeleton={nodes.Object_154.skeleton}
            />
          </group>
          <group position={[695.69, -6673.64, 11555.79]} rotation={[-Math.PI / 2, 0, 0]} scale={5.14}>
            <primitive object={nodes._rootJoint_1} />
            <skinnedMesh
              geometry={nodes.Object_167.geometry}
              material={nodes.Object_167.material}
              skeleton={nodes.Object_167.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_169.geometry}
              material={nodes.Object_169.material}
              skeleton={nodes.Object_169.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_170.geometry}
              material={nodes.Object_170.material}
              skeleton={nodes.Object_170.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_305.geometry}
              material={nodes.Object_305.material}
              skeleton={nodes.Object_305.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_307.geometry}
              material={nodes.Object_307.material}
              skeleton={nodes.Object_307.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_309.geometry}
              material={nodes.Object_309.material}
              skeleton={nodes.Object_309.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_310.geometry}
              material={nodes.Object_310.material}
              skeleton={nodes.Object_310.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_312.geometry}
              material={nodes.Object_312.material}
              skeleton={nodes.Object_312.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_313.geometry}
              material={nodes.Object_313.material}
              skeleton={nodes.Object_313.skeleton}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint_2} />
            <skinnedMesh
              geometry={nodes.Object_324.geometry}
              material={nodes.Object_324.material}
              skeleton={nodes.Object_324.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_326.geometry}
              material={nodes.Object_326.material}
              skeleton={nodes.Object_326.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_327.geometry}
              material={nodes.Object_327.material}
              skeleton={nodes.Object_327.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_462.geometry}
              material={nodes.Object_462.material}
              skeleton={nodes.Object_462.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_464.geometry}
              material={nodes.Object_464.material}
              skeleton={nodes.Object_464.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_465.geometry}
              material={nodes.Object_465.material}
              skeleton={nodes.Object_465.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_467.geometry}
              material={nodes.Object_467.material}
              skeleton={nodes.Object_467.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_468.geometry}
              material={nodes.Object_468.material}
              skeleton={nodes.Object_468.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_470.geometry}
              material={nodes.Object_470.material}
              skeleton={nodes.Object_470.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_471.geometry}
              material={nodes.Object_471.material}
              skeleton={nodes.Object_471.skeleton}
            />
          </group>
          <group position={[772.8, -6673.64, 11555.79]} rotation={[-Math.PI / 2, 0, 0]} scale={5.14}>
            <primitive object={nodes._rootJoint_3} />
            <skinnedMesh
              geometry={nodes.Object_482.geometry}
              material={nodes.Object_482.material}
              skeleton={nodes.Object_482.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_484.geometry}
              material={nodes.Object_484.material}
              skeleton={nodes.Object_484.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_485.geometry}
              material={nodes.Object_485.material}
              skeleton={nodes.Object_485.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_620.geometry}
              material={nodes.Object_620.material}
              skeleton={nodes.Object_620.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_622.geometry}
              material={nodes.Object_622.material}
              skeleton={nodes.Object_622.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_623.geometry}
              material={nodes.Object_623.material}
              skeleton={nodes.Object_623.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_625.geometry}
              material={nodes.Object_625.material}
              skeleton={nodes.Object_625.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_626.geometry}
              material={nodes.Object_626.material}
              skeleton={nodes.Object_626.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_628.geometry}
              material={nodes.Object_628.material}
              skeleton={nodes.Object_628.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_629.geometry}
              material={nodes.Object_629.material}
              skeleton={nodes.Object_629.skeleton}
            />
          </group>
          <group position={[438.64, -6673.64, 11555.79]} rotation={[-Math.PI / 2, 0, 0]} scale={5.14}>
            <primitive object={nodes._rootJoint_4} />
            <skinnedMesh
              geometry={nodes.Object_640.geometry}
              material={nodes.Object_640.material}
              skeleton={nodes.Object_640.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_642.geometry}
              material={nodes.Object_642.material}
              skeleton={nodes.Object_642.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_643.geometry}
              material={nodes.Object_643.material}
              skeleton={nodes.Object_643.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_778.geometry}
              material={nodes.Object_778.material}
              skeleton={nodes.Object_778.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_780.geometry}
              material={nodes.Object_780.material}
              skeleton={nodes.Object_780.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_781.geometry}
              material={nodes.Object_781.material}
              skeleton={nodes.Object_781.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_783.geometry}
              material={nodes.Object_783.material}
              skeleton={nodes.Object_783.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_784.geometry}
              material={nodes.Object_784.material}
              skeleton={nodes.Object_784.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_786.geometry}
              material={nodes.Object_786.material}
              skeleton={nodes.Object_786.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_787.geometry}
              material={nodes.Object_787.material}
              skeleton={nodes.Object_787.skeleton}
            />
          </group>
          <group position={[-1000, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint_5} />
            <skinnedMesh
              geometry={nodes.Object_803.geometry}
              material={materials.material}
              skeleton={nodes.Object_803.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
