"use client"; 
import Image from "next/image";
import bg from "../../../public/background/bg_home_2.jpg";
import Card_box from "./Memory.jsx"

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
      <Card_box/>
    </main>
  );
}
