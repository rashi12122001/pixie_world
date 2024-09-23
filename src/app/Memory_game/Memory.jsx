// // "use client";
// // import Image from "next/image"
// // import { useState } from "react";

// // const generatedeck=()=>{
// //     const memorycards=[
// //       "1",
// //       "2","3","4","5","6","7","8",
// //     ];
  
// //     const deck=[...memorycards,...memorycards];
// //     return deck.sort(()=>Math.random()-0.5);
// //   };
  
// //   export default function Memory() {
// //     const [cards, Setcards] = useState(generatedeck());
// //     return (
// //       <div>
// //         <div className="grid grid-cols-4">
// //           {
// //             cards.map((card,index) =>(
// //               <div className="w-28 h-28 transform" key={index}>
// // <Image src={`/card_photos/${card}.png`} fill alt="memory_card" />

// //                 </div>
// //             ))}

// //         </div>
        
// //       </div>
// //     )
// //   }
// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const generatedeck = () => {
//   const memorycards = ["1", "2", "3", "4", "5", "6", "7", "8"];
//   const deck = [...memorycards, ...memorycards];
//   return deck.sort(() => Math.random() - 0.5);
// };

// export default function Memory() {
//   const [cards, Setcards] = useState(generatedeck());
//     <div>
//       <div className="grid grid-cols-4 gap-4">
//         {cards.map((card, index) => (
//           <div className="w-28 h-28 relative" key={index}>
//             <Image
//               src={`/card_photos/${card}.png`}
//               fill
//               alt="memory_card"
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
// }
"use client"; 
import Image from "next/image";
import bg from "../../../public/background/bg_home_2.jpg";
import CardBox from "./Memory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <p>Made by Rashi Arora</p>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <CardBox />
    </main>
  );
}
