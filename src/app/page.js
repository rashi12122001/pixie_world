"use client"; 
import Image from "next/image";
import bg from "../../public/background/bg_home_3.jpg";
import RenderModel from "@/components/RenderModel";
import Fairy from "@/components/models/Fairyy"

// import { Canvas } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
// import Navigation from "@/components/navigation";
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
// const mergeBufferGeometries = BufferGeometryUtils.mergeBufferGeometries;


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        {/* <Navigation /> */}
        {/* <RenderModel> 
         </RenderModel> */}
        {/* <Canvas> */}
        {/* <Canvas */}
  {/* camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
> */}
  <Fairy />
{/* </Canvas> */}

          {/* <Fairy/> */}
      {/* <ambientLight />
      <OrbitControls />
      <DollModel /> */}
    {/* </Canvas> */}
      </div>
    </main>
  );
}
