import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// A single atom (sphere)
const Atom = ({ position, color, radius = 0.3 }: { position: [number, number, number]; color: string; radius?: number }) => (
  <mesh position={position}>
    <sphereGeometry args={[radius, 32, 32]} />
    <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
  </mesh>
);

// A bond (cylinder between two points)
const Bond = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);

  const { midpoint, length, quaternion } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(e, s);
    const len = dir.length();
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    return { midpoint: mid.toArray() as [number, number, number], length: len, quaternion: q };
  }, [start, end]);

  return (
    <mesh ref={ref} position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.06, 0.06, length, 8]} />
      <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
    </mesh>
  );
};

// Generate peptide chain nodes along a helix
const generateChain = (count: number, spread: number) => {
  const atoms: { pos: [number, number, number]; color: string; radius: number }[] = [];
  const bonds: { start: [number, number, number]; end: [number, number, number] }[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const angle = t * Math.PI * 6;
    const x = Math.cos(angle) * 2;
    const y = (t - 0.5) * spread;
    const z = Math.sin(angle) * 2;

    // Main chain atom (dark)
    const mainPos: [number, number, number] = [x, y, z];
    atoms.push({ pos: mainPos, color: i % 4 === 0 ? "#38bdf8" : "#1e293b", radius: i % 4 === 0 ? 0.35 : 0.3 });

    // Bond to previous
    if (i > 0) {
      bonds.push({ start: atoms[atoms.length - 2].pos, end: mainPos });
    }

    // Side chain branching every 3rd atom
    if (i % 3 === 0 && i > 0) {
      const sideAngle = angle + Math.PI / 2;
      const sidePos: [number, number, number] = [
        x + Math.cos(sideAngle) * 1.2,
        y + 0.5,
        z + Math.sin(sideAngle) * 1.2,
      ];
      atoms.push({ pos: sidePos, color: "#0d9488", radius: 0.25 });
      bonds.push({ start: mainPos, end: sidePos });
    }
  }

  return { atoms, bonds };
};

// The rotating chain group
const ChainGroup = ({ scrollY }: { scrollY: React.MutableRefObject<number> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { atoms, bonds } = useMemo(() => generateChain(30, 16), []);

  useFrame(() => {
    if (groupRef.current) {
      // Slow auto-rotation + scroll-driven rotation
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = scrollY.current * 0.0005;
      groupRef.current.position.y = -scrollY.current * 0.003;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {atoms.map((atom, i) => (
          <Atom key={`a-${i}`} position={atom.pos} color={atom.color} radius={atom.radius} />
        ))}
        {bonds.map((bond, i) => (
          <Bond key={`b-${i}`} start={bond.start} end={bond.end} />
        ))}
      </group>
    </Float>
  );
};

export const PeptideChain3D = () => {
  const scrollY = useRef(0);

  // Track scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      scrollY.current = window.scrollY;
    }, { passive: true });
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.35 }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#0d9488" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#38bdf8" />
        <ChainGroup scrollY={scrollY} />
      </Canvas>
    </div>
  );
};
