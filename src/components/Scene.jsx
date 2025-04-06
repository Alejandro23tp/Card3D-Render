import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Band } from './Band';

export default function Scene() {
  return (
    <Canvas 
      camera={{ 
        position: [0, 0, 13], 
        fov: 25,
        near: 0.1,
        far: 100 
      }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={Math.PI} />
      <Physics gravity={[0, -30, 0]}>
        <Band />
      </Physics>
      <Environment background blur={0.8}>
        <color attach="background" args={['#111111']} />
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
}