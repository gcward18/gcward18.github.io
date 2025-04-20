import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { SoldierModel } from './solider.tsx'

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} intensity={1} castShadow />

            {/* Soldier animation */}
            <SoldierModel />

            {/* Mars background */}
            <Environment
                background
                files="/mars.jpg" // put mars.jpg in public folder
            />

            <OrbitControls />
        </Canvas>
    )
}
