
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
"use client";
import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/ANstCNDFba0eEv82/scene.splinecode"
        onLoad={(spline) => {
          const camera = spline?.scene?.activeCamera?.node;
          
          if (camera) {
            camera.enableZoom = false; // Disable zoom
            camera.enableRotate = false; // Disable rotation
            camera.enablePan = false; // Disable panning
          }
        }}
        style={{ pointerEvents: 'none' }} // Disable all pointer events
      />
    </div>
  );
};

export default SplineComponent;

