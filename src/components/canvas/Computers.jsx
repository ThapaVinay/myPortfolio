import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {

  // Load the 3D model from a glTF file
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Add ambient light */}
      <hemisphereLight intensity={1.5} groundColor="black" />

      {/* Add a point light */}
      <pointLight intensity={5} />

      <spotLight
        // position={[-20, 50, 10]}
        // angle={0.12}
        penumbra = {1}
        intensity = {100}
        castShadow
        // shadow-mapSize={1024}  
      />

      {/* Render the 3D object loaded from glTF */}
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.40 : 0.70}
        position={ isMobile ? [-0, -2, -0.5] :[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // it is used to check the device size
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    
    // mediaQuery.matches returns a boolean
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  },[])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Display a loading spinner while 3D assets are loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls for interacting with the 3D scene */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Render the Computers component */}
        <Computers isMobile = {isMobile} />
      </Suspense>

      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
