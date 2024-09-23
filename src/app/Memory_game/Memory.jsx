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
"use client";
import Image from "next/image";
import { useState } from "react";

const generateDeck = () => {
  const memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const deck = [...memoryCards, ...memoryCards];
  return deck.sort(() => Math.random() - 0.5);
};

export default function Memory() {
  const [cards, setCards] = useState(generateDeck());

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div className="w-28 h-28 relative" key={index}>
            <Image
              src={`/card_photos/${card}.png`}
              fill
              alt="memory_card"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
