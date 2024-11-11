import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./ethereum_explode/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  const [isForward, setIsForward] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (actions && actions["Animation"] && !isAnimating) {
      const action = actions["Animation"];
      action.reset();
      action.clampWhenFinished = true;
      action.timeScale = isForward ? 1 : -1;
      action.play();
      setIsAnimating(true);
      action.getMixer().addEventListener("finished", () => {
        setIsAnimating(false); 
        setIsForward(!isForward); 
      });
    }
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[20, 100, 10]}
        angle={0.12}
        penumbra={0}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        onClick={handleClick}
        object={scene}
        scale={isMobile ? 1.7 : 3}
        position={isMobile ? [0, -1, 0] : [0, -1, 0]}
        rotation={[0, 10, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
