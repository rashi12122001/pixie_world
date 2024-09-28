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
import { useState, useEffect } from "react";

const generateDeck = () => {
  const memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const deck = [...memoryCards, ...memoryCards];
  return deck.sort(() => Math.random() - 0.5);
};

export default function Memory() {
  const [cards, setCards] = useState(generateDeck());
  const [flipped, setFlipped] = useState([]); 
  const [solved, setSolved] = useState([]); 

  useEffect(() => {
    const checkformatch=()=>{

    }
    if (flipped.length === 2) {
      const [first, second] = flipped;
  
      if (cards[first] === cards[second]) {
     setSolved([...solved,...flipped]);
      } 
      if(flipped.length===2){
checkformatch();
      }
    }
  }, [flipped, cards,solved]); 
  const handleClick = (index) => { 
    // Ensure that we can only flip two cards at a time
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped((prevFlipped) => [...prevFlipped, index]);
    }
  };

  useEffect(() => {
    // Check for a match after flipping two cards
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      if (cards[firstIndex] !== cards[secondIndex]) {
        // Cards do not match, reset flipped after a delay
        const timer = setTimeout(() => {
          setFlipped([]); // Reset the flipped state
        }, 1000); // Adjust the delay as needed

        // Clean up the timeout on unmount or before setting a new one
        return () => clearTimeout(timer);
      } else {
        // If cards match, you can handle it (e.g., keep them flipped)
        console.log("Match found!");
      }
    }
  }, [flipped, cards]); 

  return (
    <div>
      <div className="grid h-screen place-items-center grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div 
            key={index} 
            style={{ backgroundColor: '#6737a1' }} 
            className="flex justify-center text-4xl font-bold items-center w-28 h-28 transform cursor-pointer" 
            onClick={() => handleClick(index)} 
          >
            {flipped.includes(index) ? (
              <Image
                src={`/card_photos/${card}.png`}
                fill
                alt="memory_card"
                style={{ objectFit: "cover" }}
              />
            ) : (
              "?"
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

