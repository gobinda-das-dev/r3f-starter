import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh rotation={[0.05, 1, 0.5]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
