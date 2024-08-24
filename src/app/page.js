"use client"; 
import Image from "next/image";
import bg from "../../public/background/bg_home_3.jpg";
import RenderModel from "@/components/RenderModel";
import Fairy from "@/components/models/Fairyy"
import Navigation from "@/components/navigation";
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
<Navigation/>
      <div className="w-full h-screen">
  <Fairy />
      </div>
    </main>
  );
}
