// import { useGLTF } from '@react-three/drei'

// export function GLBModel(props) {
//     const { scene } = useGLTF('models/sphere-cube.glb')
//     return <primitive object={scene} {...props} />
// }
import { useRef } from 'react'
import { GLTFLoader } from 'three/addons'
import { useLoader, useFrame } from '@react-three/fiber'

export function GLBModel(props) {

    const ref = useRef()

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01
        }
    })

    const gltf = useLoader(GLTFLoader, '/models/sphere-cube.glb')
    return <primitive object={gltf.scene} {...props} ref={ref} />
}