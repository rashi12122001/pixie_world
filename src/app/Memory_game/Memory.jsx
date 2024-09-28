
// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const generateDeck = () => {
//   const memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8"];
//   const deck = [...memoryCards, ...memoryCards];
//   return deck.sort(() => Math.random() - 0.5);
// };

// export default function Memory() {
//   const [cards, setCards] = useState(generateDeck());
//   const [flipped, setFlipped] = useState([]); 
//   const [solved, setSolved] = useState([]); 

//   const handleClick = (index) => { 
//     // Ensure that we can only flip two cards at a time
//     if (!flipped.includes(index) && flipped.length < 2) {
//       setFlipped((prevFlipped) => [...prevFlipped, index]);
//     }
//   };

//   useEffect(() => {
//     // Check for a match after flipping two cards
//     if (flipped.length === 2) {
//       const [firstIndex, secondIndex] = flipped;
      
//       if (cards[firstIndex] === cards[secondIndex]) {
//         // If cards match, add to solved
//         setSolved((prevSolved) => [...prevSolved, cards[firstIndex]]);
//         console.log("Match found!");
//         setFlipped([]); // Reset flipped state after match
//       } else {
//         // Cards do not match, reset flipped after a delay
//         const timer = setTimeout(() => {
//           setFlipped([]); // Reset the flipped state
//         }, 1000); // Adjust the delay as needed

//         // Clean up the timeout on unmount or before setting a new one
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [flipped, cards]); 

//   return (
//     <div>
//       <div className="grid h-screen place-items-center grid-cols-4 gap-5">
//         {cards.map((card, index) => (
//           <div 
//             key={index} 
//             style={{ backgroundColor: '#6737a1' }} 
//             className="flex justify-center text-4xl font-bold items-center w-28 h-28 transform cursor-pointer" 
//             onClick={() => handleClick(index)} 
//           >
//             {flipped.includes(index) || solved.includes(cards[index]) ? (
//               <Image
//                 src={`/card_photos/${card}.png`}
//                 fill
//                 alt="memory_card"
//                 style={{ objectFit: "cover" }}
//               />
//             ) : (
//               "?"
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const generateDeck = () => {
//   const memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8"];
//   const deck = [...memoryCards, ...memoryCards];
//   return deck.sort(() => Math.random() - 0.5);
// };

// export default function Memory() {
//   const [cards, setCards] = useState(generateDeck());
//   const [flipped, setFlipped] = useState([]); 
//   const [solved, setSolved] = useState([]); 
//   const [flipCount, setFlipCount] = useState(0); // State to track the number of flips
//   const [congratsVisible, setCongratsVisible] = useState(false); // State for popup visibility

//   const handleClick = (index) => { 
//     // Ensure that we can only flip two cards at a time
//     if (!flipped.includes(index) && flipped.length < 2) {
//       setFlipped((prevFlipped) => [...prevFlipped, index]);
//       setFlipCount((prevCount) => prevCount + 1); // Increment flip count
//     }
//   };

//   useEffect(() => {
//     // Check for a match after flipping two cards
//     if (flipped.length === 2) {
//       const [firstIndex, secondIndex] = flipped;
      
//       if (cards[firstIndex] === cards[secondIndex]) {
//         // If cards match, add to solved
//         setSolved((prevSolved) => [...prevSolved, cards[firstIndex]]);
//         console.log("Match found!");
//         setFlipped([]); // Reset flipped state after match
//       } else {
//         // Cards do not match, reset flipped after a delay
//         const timer = setTimeout(() => {
//           setFlipped([]); // Reset the flipped state
//         }, 1000); // Adjust the delay as needed

//         // Clean up the timeout on unmount or before setting a new one
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [flipped, cards]); 

//   useEffect(() => {
//     // Check if all pairs are solved
//     if (solved.length === cards.length / 2) {
//       setCongratsVisible(true); // Show congratulations popup
//     }
//   }, [solved, cards]);

//   const handleClosePopup = () => {
//     setCongratsVisible(false); // Close the popup
//     // Optionally, reset the game or do other actions
//     setCards(generateDeck()); // Reset the deck
//     setSolved([]); // Reset solved pairs
//     setFlipCount(0); // Reset flip count
//   };

//   return (
//     <div>
//       <h2 className="text-center font-bold">Memory Game</h2>
//       <div className="text-center mb-4">Flips: {flipCount}</div> {/* Score Card */}
//       <div className="grid h-screen place-items-center grid-cols-4 gap-5">
//         {cards.map((card, index) => (
//           <div 
//             key={index} 
//             style={{ backgroundColor: '#6737a1' }} 
//             className="flex justify-center text-4xl font-bold items-center w-28 h-28 transform cursor-pointer" 
//             onClick={() => handleClick(index)} 
//           >
//             {flipped.includes(index) || solved.includes(cards[index]) ? (
//               <Image
//                 src={`/card_photos/${card}.png`}
//                 fill
//                 alt="memory_card"
//                 style={{ objectFit: "cover" }}
//               />
//             ) : (
//               "?"
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Congratulations Popup */}
//       {congratsVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded shadow-lg">
//             <h2 className="text-xl font-bold mb-3">Congratulations!</h2>
//             <p>You matched all the cards!</p>
//             <button 
//               onClick={handleClosePopup} 
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Play Again
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
  const [flipCount, setFlipCount] = useState(0); // State to track the number of flips
  const [congratsVisible, setCongratsVisible] = useState(false); // State for popup visibility

  const handleClick = (index) => { 
    // Ensure that we can only flip two cards at a time
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped((prevFlipped) => [...prevFlipped, index]);
      setFlipCount((prevCount) => prevCount + 1); // Increment flip count
    }
  };

  useEffect(() => {
    // Check for a match after flipping two cards
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      
      if (cards[firstIndex] === cards[secondIndex]) {
        // If cards match, add to solved
        setSolved((prevSolved) => [...prevSolved, cards[firstIndex]]);
        console.log("Match found!");
        setFlipped([]); // Reset flipped state after match
      } else {
        // Cards do not match, reset flipped after a delay
        const timer = setTimeout(() => {
          setFlipped([]); // Reset the flipped state
        }, 1000); // Adjust the delay as needed

        // Clean up the timeout on unmount or before setting a new one
        return () => clearTimeout(timer);
      }
    }
  }, [flipped, cards]); 

  useEffect(() => {
    // Check if all pairs are solved
    if (solved.length === cards.length / 2) {
      setCongratsVisible(true); // Show congratulations popup
    }
  }, [solved, cards]);

  const handleClosePopup = () => {
    setCongratsVisible(false); // Close the popup
    // Optionally, reset the game or do other actions
    setCards(generateDeck()); // Reset the deck
    setSolved([]); // Reset solved pairs
    setFlipCount(0); // Reset flip count
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-2xl font-bold">Memory Game</h2>
      <div className="text-center mb-4">Flips: {flipCount}</div> {/* Score Card */}
      
      <div className="grid place-items-center grid-cols-4 gap-5 max-w-[600px] w-full overflow-hidden"> {/* Max width to prevent scrolling */}
        {cards.map((card, index) => (
          <div 
            key={index} 
            style={{ backgroundColor: '#6737a1' }} 
            className="flex justify-center text-4xl font-bold items-center w-28 h-28 transform cursor-pointer" 
            onClick={() => handleClick(index)} 
          >
            {flipped.includes(index) || solved.includes(cards[index]) ? (
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

      {/* Congratulations Popup */}
      {congratsVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"> {/* Darker background */}
          <div className="bg-white p-5 rounded shadow-lg" style={{background:"black"}}>
            <h2 className="text-xl font-bold mb-3">Congratulations!</h2>
            <p>You matched all the cards!</p>
            <button 
              onClick={handleClosePopup} 
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const generateDeck = () => {
//   const memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8"];
//   const deck = [...memoryCards, ...memoryCards];
//   return deck.sort(() => Math.random() - 0.5);
// };

// export default function Memory() {
//   const [cards, setCards] = useState(generateDeck());
//   const [flipped, setFlipped] = useState([]); 
//   const [solved, setSolved] = useState([]); 
//   const [flipCount, setFlipCount] = useState(0); // State to track the number of flips

//   const handleClick = (index) => { 
//     // Ensure that we can only flip two cards at a time
//     if (!flipped.includes(index) && flipped.length < 2) {
//       setFlipped((prevFlipped) => [...prevFlipped, index]);
//       setFlipCount((prevCount) => prevCount + 1); // Increment flip count
//     }
//   };

//   useEffect(() => {
//     // Check for a match after flipping two cards
//     if (flipped.length === 2) {
//       const [firstIndex, secondIndex] = flipped;
      
//       if (cards[firstIndex] === cards[secondIndex]) {
//         // If cards match, add to solved
//         setSolved((prevSolved) => [...prevSolved, cards[firstIndex]]);
//         console.log("Match found!");
//         setFlipped([]); // Reset flipped state after match
//       } else {
//         // Cards do not match, reset flipped after a delay
//         const timer = setTimeout(() => {
//           setFlipped([]); // Reset the flipped state
//         }, 1000); // Adjust the delay as needed

//         // Clean up the timeout on unmount or before setting a new one
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [flipped, cards]); 

//   return (
//     <div>
//       <h2 className="text-center text-2xl font-bold">Memory Game</h2>
//       <div className="text-center mb-4">Flips: {flipCount}</div> {/* Score Card */}
//       <div className="grid h-screen place-items-center grid-cols-4 gap-5">
//         {cards.map((card, index) => (
//           <div 
//             key={index} 
//             style={{ backgroundColor: '#6737a1' }} 
//             className="flex justify-center text-4xl font-bold items-center w-28 h-28 transform cursor-pointer" 
//             onClick={() => handleClick(index)} 
//           >
//             {flipped.includes(index) || solved.includes(cards[index]) ? (
//               <Image
//                 src={`/card_photos/${card}.png`}
//                 fill
//                 alt="memory_card"
//                 style={{ objectFit: "cover" }}
//               />
//             ) : (
//               "?"
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
