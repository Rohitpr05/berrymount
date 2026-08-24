"use client";

import { useMemo } from "react";
import type { ThreeElements } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { fibonacciSphere, seededRandom } from "./geometry";

type GroupProps = ThreeElements["group"];

/** A drupelet-cluster berry (raspberry / blackberry): many small glossy spheres over a sphere shell. */
export function DrupeletBerry({
  radius = 1,
  dropletCount = 55,
  color = "#7a1f3d",
  seed = 1,
  ...props
}: GroupProps & { radius?: number; dropletCount?: number; color?: string; seed?: number }) {
  const droplets = useMemo(() => {
    const rand = seededRandom(seed * 1000);
    const points = fibonacciSphere(dropletCount, radius);
    return points.map(([x, y, z]) => {
      const jitter = 1 + (rand() - 0.5) * 0.12;
      const dropletRadius = radius * 0.24 * (0.85 + rand() * 0.3);
      return { position: [x * jitter, y * jitter, z * jitter] as [number, number, number], scale: dropletRadius };
    });
  }, [radius, dropletCount, seed]);

  return (
    <group {...props}>
      <Instances limit={dropletCount}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshPhysicalMaterial color={color} roughness={0.3} clearcoat={1} clearcoatRoughness={0.15} metalness={0.05} />
        {droplets.map((d, i) => (
          <Instance key={i} position={d.position} scale={d.scale} />
        ))}
      </Instances>
    </group>
  );
}

/** A smooth-skinned berry (strawberry): one glossy sphere plus tiny surface seed specks. */
export function SeededBerry({
  radius = 1,
  seedCount = 130,
  color = "#b3273f",
  seedColor = "#d9c15a",
  seed = 2,
  ...props
}: GroupProps & { radius?: number; seedCount?: number; color?: string; seedColor?: string; seed?: number }) {
  const seeds = useMemo(() => {
    const rand = seededRandom(seed * 777);
    return fibonacciSphere(seedCount, radius * 1.01).map(([x, y, z]) => ({
      position: [x, y, z] as [number, number, number],
      scale: radius * 0.045 * (0.7 + rand() * 0.6),
    }));
  }, [radius, seedCount, seed]);

  return (
    <group {...props}>
      <mesh>
        <sphereGeometry args={[radius, 48, 48]} />
        <meshPhysicalMaterial color={color} roughness={0.25} clearcoat={1} clearcoatRoughness={0.2} metalness={0.05} />
      </mesh>
      <Instances limit={seedCount}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshStandardMaterial color={seedColor} roughness={0.6} />
        {seeds.map((s, i) => (
          <Instance key={i} position={s.position} scale={s.scale} />
        ))}
      </Instances>
    </group>
  );
}

/** A loose bunch of smooth berries (blueberries): several small spheres clumped together. */
export function BerryBunch({
  count = 11,
  spread = 0.9,
  berryRadius = 0.42,
  color = "#2f3f78",
  seed = 3,
  ...props
}: GroupProps & { count?: number; spread?: number; berryRadius?: number; color?: string; seed?: number }) {
  const berries = useMemo(() => {
    const rand = seededRandom(seed * 313);
    const out: { position: [number, number, number]; scale: number }[] = [];
    for (let i = 0; i < count; i++) {
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      const r = spread * Math.cbrt(rand());
      out.push({
        position: [r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)],
        scale: berryRadius * (0.75 + rand() * 0.5),
      });
    }
    return out;
  }, [count, spread, berryRadius, seed]);

  return (
    <group {...props}>
      <Instances limit={count}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.35} clearcoat={0.8} clearcoatRoughness={0.25} metalness={0.05} />
        {berries.map((b, i) => (
          <Instance key={i} position={b.position} scale={b.scale} />
        ))}
      </Instances>
    </group>
  );
}
