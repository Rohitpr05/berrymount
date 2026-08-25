"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { DrupeletBerry, SeededBerry, BerryBunch } from "./BerryCluster";

function Rig({ scrollProgress }: { scrollProgress: React.RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useThree((s) => s.pointer);
  const target = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!group.current) return;

    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.x, 0.04);
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.y, 0.04);

    const progress = scrollProgress.current ?? 0;

    group.current.rotation.y += delta * 0.12 + target.current.x * delta * 0.4;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.current.y * 0.15, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -progress * 2.4, 0.08);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -progress * 2.2, 0.08);
    const scale = THREE.MathUtils.lerp(1, 1.35, Math.min(progress, 1));
    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group}>
      <DrupeletBerry position={[0.4, 0.1, 0]} radius={1.15} dropletCount={64} color="#2c1130" seed={1} />
      <SeededBerry position={[-1.5, 0.6, 0.6]} radius={0.62} color="#b3273f" seed={2} />
      <BerryBunch position={[-0.9, -0.95, 0.9]} berryRadius={0.24} count={13} spread={0.55} color="#33437a" seed={3} />
      <DrupeletBerry position={[1.6, -0.7, -0.4]} radius={0.5} dropletCount={40} color="#8a2145" seed={4} />
    </group>
  );
}

export function BerryScene({
  scrollProgress,
  active,
}: {
  scrollProgress: React.RefObject<number>;
  active: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.2], fov: 38 }}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={0.45} color="#5b3a66" />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#f3d9a8" />
      <directionalLight position={[-4, -1, -2]} intensity={0.9} color="#6f4dd6" />
      <pointLight position={[0, -2, 3]} intensity={0.6} color="#c6a15a" />

      <Rig scrollProgress={scrollProgress} />

      <ContactShadows position={[0, -1.7, 0]} opacity={0.5} scale={8} blur={2.6} far={2.5} color="#0c0410" />
    </Canvas>
  );
}
