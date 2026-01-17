import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { 
  Code, 
  Server, 
  Shield, 
  Cpu, 
  Brain, 
  Lock 
} from 'lucide-react';

// Cube mesh that rotates
const Cube = () => {
  const mesh = useRef<Mesh>(null!);
  
  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });
  
  return (
    <Box ref={mesh} args={[3, 3, 3]} scale={[1, 1, 1]}>
      <meshStandardMaterial 
        wireframe 
        color="#00FF41" 
        emissive="#00FF41"
        emissiveIntensity={0.5}
      />
    </Box>
  );
};

// Actual component that combines Three.js canvas with 2D elements
const RotatingCube = () => {
  const [hovering, setHovering] = useState(false);
  
  const cubeIcons = [
    { Icon: Code, label: "Code", position: "face-front" },
    { Icon: Shield, label: "Security", position: "face-back" },
    { Icon: Server, label: "Cloud", position: "face-right" },
    { Icon: Cpu, label: "Hardware", position: "face-left" },
    { Icon: Brain, label: "AI", position: "face-top" },
    { Icon: Lock, label: "Encryption", position: "face-bottom" },
  ];
  
  return (
    <div 
      className="w-full h-full relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Three.js Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="absolute inset-0" 
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Cube />
      </Canvas>
      
      {/* 2D cube faces with icons */}
      <div className="absolute inset-0 rotate-3d pointer-events-none">
        {cubeIcons.map(({ Icon, label, position }, index) => (
          <div 
            key={index}
            className={`cube-face ${position} flex flex-col items-center justify-center`}
          >
            <Icon 
              size={48} 
              className={`text-neo-green-100 ${hovering ? 'animate-pulse-glow' : ''}`} 
            />
            <span className="mt-2 font-semibold text-neo-green-100 text-xl">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCube;