import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  color,
  size,
  speed,
  distort,
  type = "icosahedron",
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distort: number;
  type?: "icosahedron" | "dodecahedron" | "torusKnot";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.4;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position}>
        {type === "icosahedron" && <icosahedronGeometry args={[size, 2]} />}
        {type === "dodecahedron" && <dodecahedronGeometry args={[size, 0]} />}
        {type === "torusKnot" && <torusKnotGeometry args={[size * 0.7, size * 0.22, 96, 16]} />}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2.2}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={0.25}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function GlassRing({ position, color, radius, tube }: {
  position: [number, number, number];
  color: string;
  radius: number;
  tube: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[radius, tube, 24, 48]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function StarPoints() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#fb923c"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function InteractiveCameraGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.15, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.12, 0.05);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fef08a" />
      <pointLight position={[-6, 4, 3]} intensity={2.2} color="#e5c158" distance={22} />
      <pointLight position={[6, -3, 2]} intensity={2} color="#00b4d8" distance={22} />
      <pointLight position={[0, 6, -4]} intensity={1.8} color="#0284c7" distance={20} />
      <pointLight position={[-4, -5, 2]} intensity={1.4} color="#1e3a8a" distance={18} />

      <InteractiveCameraGroup>
        {/* Faceted Gold Geometric Dome & Ocean Cyan Wave Elements Matching Logo */}
        <FloatingShape position={[-3.6, 1.6, -2]} color="#e5c158" size={1.2} speed={1.7} distort={0.25} type="icosahedron" />
        <FloatingShape position={[3.5, -1.2, -1.2]} color="#00b4d8" size={0.9} speed={1.5} distort={0.35} type="dodecahedron" />
        <FloatingShape position={[-1.2, -2.4, -3]} color="#0284c7" size={0.75} speed={2.2} distort={0.4} type="torusKnot" />
        <FloatingShape position={[2.5, 2.4, -2.2]} color="#fef08a" size={0.7} speed={1.4} distort={0.2} type="icosahedron" />
        <FloatingShape position={[-4.2, -1.5, -1.5]} color="#38bdf8" size={0.55} speed={1.9} distort={0.3} type="dodecahedron" />

        {/* Outer Circular Medallion Rings Inspired by Logo */}
        <GlassRing position={[0, 0, -4.5]} color="#e5c158" radius={1.7} tube={0.16} />
        <GlassRing position={[4.2, 2.2, -3]} color="#00b4d8" radius={0.75} tube={0.12} />
        <GlassRing position={[-3, -1.2, -2.5]} color="#fde047" radius={0.9} tube={0.14} />

        <StarPoints />
      </InteractiveCameraGroup>
    </>
  );
}

export default function HeroScene() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent", pointerEvents: "auto" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
