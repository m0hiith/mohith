"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 2200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#3b82f6"),
      new THREE.Color("#60a5fa"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
    ];

    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.03;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        vertexColors
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.75}
      />
    </Points>
  );
}

function FloatingSphere({ position, scale, speed, wireColor }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  wireColor: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useRef(Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + offset.current;
      ref.current.position.y = position[1] + Math.sin(t) * 0.5;
      ref.current.rotation.x += 0.005 * speed;
      ref.current.rotation.y += 0.007 * speed;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
      <meshPhongMaterial
        color={wireColor}
        wireframe
        transparent
        opacity={0.25}
      />
    </Sphere>
  );
}

function CoreRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.z += delta * 0.2;
    }
  });
  return (
    <Torus ref={ref} args={[3.2, 0.04, 16, 120]}>
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.7} />
    </Torus>
  );
}

function CoreRing2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
      ref.current.rotation.z -= delta * 0.15;
    }
  });
  return (
    <Torus ref={ref} args={[4.5, 0.025, 16, 120]} rotation={[1.2, 0, 0]}>
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
    </Torus>
  );
}

function CentralGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
    }
  });
  return (
    <Sphere ref={ref} args={[2, 48, 48]}>
      <meshPhongMaterial
        color="#0a1628"
        emissive="#1e3a5f"
        emissiveIntensity={0.6}
        wireframe={false}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
}

function CentralWire() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.08;
      ref.current.rotation.x += delta * 0.04;
    }
  });
  return (
    <Sphere ref={ref} args={[2.05, 16, 16]}>
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 18], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#3b82f6" intensity={2} />
        <pointLight position={[-10, -10, 5]} color="#06b6d4" intensity={1.5} />
        <pointLight position={[0, 0, 0]} color="#60a5fa" intensity={1} />

        <ParticleField />
        <CentralGlobe />
        <CentralWire />
        <CoreRing />
        <CoreRing2 />
        <FloatingSphere position={[-6, 2, -3]} scale={0.7} speed={0.7} wireColor="#3b82f6" />
        <FloatingSphere position={[7, -1.5, -5]} scale={0.5} speed={0.9} wireColor="#06b6d4" />
        <FloatingSphere position={[2, 4, -8]} scale={0.4} speed={1.1} wireColor="#8b5cf6" />
        <FloatingSphere position={[-5, -3, -6]} scale={0.35} speed={0.6} wireColor="#60a5fa" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
