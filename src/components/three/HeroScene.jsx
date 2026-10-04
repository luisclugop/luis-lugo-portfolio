import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import Sun from './Sun'
import Grid from './Grid'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function CameraRig() {
    useFrame((state) => {
        const targetX = state.pointer.x * 1.5
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05)
        state.camera.lookAt(0, 0.2, -50)
    })
    return null
}

function HeroScene({ active = true }) {
    const reduced = useReducedMotion()
    const animate = active && !reduced

    return (
        <Canvas
            frameloop={animate ? 'always' : 'demand'}
            camera={{ position: [0, 0.2, 5], fov: 60 }}
            dpr={[1, 2]}
        >
            <Stars radius={80} depth={30} count={1500} factor={3} fade speed={reduced ? 0 : 0.5} />
            <Sun />
            <Grid />
            {!reduced && <CameraRig />}
        </Canvas>
    )
}

export default HeroScene