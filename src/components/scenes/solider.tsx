import {useEffect, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import {useGLTF, OrbitControls, Environment, useAnimations} from '@react-three/drei';

export function SoldierModel(props: any) {
    const { scene, animations, materials } = useGLTF('https://threejs.org/examples/models/gltf/Soldier.glb');
    const {actions} = useAnimations(animations,  scene);

    useEffect(() => {
        if (actions && actions['Walk'])
        {
            actions['Walk']?.reset()?.play()
        }

        scene.traverse((child) => {
            console.log(child)
            if (child.isMesh && child.name.includes('vanguard')) {
                child.material.color.set("#B9D9EB");
                child.material.metalness = 0.15;
                child.material.roughness = 1;
            }
        })
    }, [actions]);
    return <primitive object={scene} {...props} />;
}

export default function ThreeScene() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        >
            <Canvas
                camera={{ position: [0, 2, 5], fov: 60 }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <SoldierModel
                    position={[-.1, -1.5, -.5]}
                    scale={1.5}
                    rotation={[0, 9.65, 0]}
                />
                <Environment
                    background
                    files="/mars.jpg"
                />

                <OrbitControls 
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    minDistance={3}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    );
}
