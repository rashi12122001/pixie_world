
// "use client";
// import React from 'react';
// import Spline from '@splinetool/react-spline';

// const SplineComponent = () => {
//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <Spline scene="https://prod.spline.design/ANstCNDFba0eEv82/scene.splinecode" />
//     </div>
//   );
// };

// export default SplineComponent;
// "use client";
// import React, { useEffect } from 'react';
// import Spline from '@splinetool/react-spline';

// const SplineComponent = () => {
//   useEffect(() => {
//     // Prevent scroll zoom
//     const handleWheel = (event) => event.preventDefault();
//     window.addEventListener('wheel', handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', height: '100vh', overflow: 'hidden', }}>
//       <Spline
//         scene="https://prod.spline.design/ANstCNDFba0eEv82/scene.splinecode"
//         style={{ transform: 'scale(1)' }} // Adjust scale to fit the model
//       />
//     </div>
//   );
// };

// export default SplineComponent;
//this makes my fairy crazy!

// "use client";
// import React from 'react';
// import Spline from '@splinetool/react-spline';

// const SplineComponent = () => {
//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <Spline
//         scene="https://prod.spline.design/ANstCNDFba0eEv82/scene.splinecode"
//         onLoad={(spline) => {
//           const camera = spline?.scene?.activeCamera?.node;
          
//           if (camera) {
//             camera.enableZoom = false; // Disable zoom
//             camera.enableRotate = false; // Disable rotation
//             camera.enablePan = false; // Disable panning
//           }
//         }}
//         style={{ pointerEvents: 'none' }} // Disable all pointer events
//       />
//     </div>
//   );
// };

// export default SplineComponent;

"use client";
import React, { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  const [spline, setSpline] = useState(null);
  const [model, setModel] = useState(null);
  const animationFrameId = useRef(null);
  const positionY = useRef(0);
  const direction = useRef(1);

  useEffect(() => {
    if (spline && spline.scene) {
      const model = findModel(spline.scene); // Replace with your logic to find the model
      setModel(model);

      // Animation loop
      const animate = () => {
        if (model) {
          positionY.current += 0.01 * direction.current;
          if (positionY.current > 1 || positionY.current < -1) direction.current *= -1;

          model.position.y = positionY.current;
        }

        animationFrameId.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [spline]);

  const findModel = (scene) => {
    // Replace with your logic to find the specific model in the scene
    return scene.children.find(child => child.name === 'YourModelName');
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/ANstCNDFba0eEv82/scene.splinecode"
        onLoad={(loadedSpline) => setSpline(loadedSpline)}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default SplineComponent;
