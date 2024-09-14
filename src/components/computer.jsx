import React, { useRef } from 'react'
import {Html, useGLTF} from '@react-three/drei'

const computer = (props) => {
    const { nodes, materials } = useGLTF('/models/ProgrammerRoom.glb')

    materials['Material.073'].color.set('#000000')
    materials['Material.003'].color.set('#2c2c2c')

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="d62911fc359f4be18cd683384a2059c3fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="RootNode">
                            <group
                                name="Plane"
                                position={[-14.286, 85.714, -14.286]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                {/*<mesh*/}
                                {/*    name="Plane_Material010_0"*/}
                                {/*    castShadow*/}
                                {/*    receiveShadow*/}
                                {/*    geometry={nodes.Plane_Material010_0.geometry}*/}
                                {/*    material={materials['Material.010']}*/}
                                {/*/>*/}
                                <mesh
                                    name="Plane_Material001_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material001_0.geometry}
                                    material={materials['Material.001']}
                                />
                                <mesh
                                    name="Plane_Material003_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material003_0.geometry}
                                    material={materials['Material.003']}
                                />
                                <mesh
                                    name="Plane_Screen_0"
                                    castShadow
                                    receiveShadow
                                >
                                    <Html position={[-0.235 , 0, 0.155]} scale={[0.07, 0.07, 0.07]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/angular_whiteTransparent.png" alt="Angular"/>
                                    </Html>
                                </mesh>
                                <mesh
                                    name="Plane_Material004_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material004_0.geometry}
                                    material={materials['Material.004']}
                                />
                                <mesh
                                    name="Plane_Screen001_0"
                                    castShadow
                                    receiveShadow>

                                    <Html position={[0.295 , 0, 0.15]} scale={[0.375, 0.375, 0.375]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/react.svg" alt="React"/>
                                    </Html>
                                </mesh>

                                <mesh
                                    name="Plane_Material005_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material005_0.geometry}
                                    material={materials['Material.005']}
                                />
                                <mesh
                                    name="Plane_Screen002_0"
                                    castShadow
                                    receiveShadow>
                                    <Html position={[0.7 , 0, 0.2]} scale={[0.015, 0.015, 0.015]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/AWS.png" alt="AWS"/>
                                    </Html>
                                </mesh>
                                <mesh
                                    name="Plane_Material006_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material006_0.geometry}
                                    material={materials['Material.006']}
                                />
                                <mesh
                                    name="Plane_Screen003_0"
                                    castShadow
                                    receiveShadow>

                                    <Html position={[-0.375 , 0, 0.615]} scale={[0.06, 0.06, 0.06]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/github-mark-white.png" alt="Github"/>
                                    </Html>
                                </mesh>
                                <mesh
                                    name="Plane_Material007_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material007_0.geometry}
                                    material={materials['Material.007']}
                                />
                                <mesh
                                    name="Plane_Screen004_0"
                                    castShadow
                                    receiveShadow>

                                    <Html position={[0.27 , 0, 0.605]} scale={[0.026, 0.026, 0.026]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/databases.png" alt="Databases"/>
                                    </Html>
                                </mesh>
                                <mesh
                                    name="Plane_Material009_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material009_0.geometry}
                                    material={materials['Material.009']}
                                />
                                <mesh
                                    name="Plane_Screen006_0"
                                    castShadow
                                    receiveShadow>
                                    <Html position={[0.807 , 0, 0.615]} scale={[0.01, 0.01, 0.01]} rotation={[Math.PI / 2, 0, 0]} transform occlude>
                                        <img src="/assets/CSharp.png" alt="C#"/>
                                    </Html>
                                </mesh>
                                <mesh
                                    name="Plane_Material012_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material012_0.geometry}
                                    material={materials['Material.012']}
                                />
                                <mesh
                                    name="Plane_Material011_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material011_0.geometry}
                                    material={materials['Material.011']}
                                />
                                <mesh
                                    name="Plane_Material014_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material014_0.geometry}
                                    material={materials['Material.014']}
                                />
                                <mesh
                                    name="Plane_Material015_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material015_0.geometry}
                                    material={materials['Material.015']}
                                />
                                <mesh
                                    name="Plane_Material017_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material017_0.geometry}
                                    material={materials['Material.017']}
                                />
                                <mesh
                                    name="Plane_Material016_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material016_0.geometry}
                                    material={materials['Material.016']}
                                />
                                <mesh
                                    name="Plane_Material019_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material019_0.geometry}
                                    material={materials['Material.019']}
                                />
                                <mesh
                                    name="Plane_Material020_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material020_0.geometry}
                                    material={materials['Material.020']}
                                />
                                <mesh
                                    name="Plane_Material021_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material021_0.geometry}
                                    material={materials['Material.021']}
                                />
                                <mesh
                                    name="Plane_Material022_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material022_0.geometry}
                                    material={materials['Material.022']}
                                />
                                <mesh
                                    name="Plane_Material024_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material024_0.geometry}
                                    material={materials['Material.024']}
                                />
                                <mesh
                                    name="Plane_Material025_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material025_0.geometry}
                                    material={materials['Material.025']}
                                />
                                <mesh
                                    name="Plane_Screen007_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Screen007_0.geometry}
                                    material={materials['Screen.007']}
                                />
                                <mesh
                                    name="Plane_Material070_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material070_0.geometry}
                                    material={materials['Material.070']}
                                />
                                <mesh
                                    name="Plane_Material073_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_Material073_0.geometry}
                                    material={materials['Material.073']}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/ProgrammerRoom.glb')

export default computer;