import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <div className="absolute z-20 "></div>
      <button
        className="z-30 fixed bottom-4 right-4 bg-yellow-400 border-4 border-black text-black px-6 py-3 font-extrabold text-xl shadow-[6px_6px_0px_black]"
        onClick={() => setIsOpen(!isOpen)}
      >
        Assets
      </button>

      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" />}

      {/*Slide Panel*/}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-pink-300 border-black z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b-4 border-black">
          <h2 className="text-2xl font-extrabold">Assets</h2>
          <button
            className="bg-white border-4 border-black px-3 py-1 font-bold  shadow-[4px_4px_0px_black]"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        </div>
        {/* Content */}
        <div className="p-4 space-y-4">
          <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_black]">
            Chair
          </div>
          <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_black]">
            Table
          </div>
          <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_black]">
            Plant
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
