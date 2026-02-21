import { useState } from "react";
import "./App.css";
import { usePanel } from "./hooks/usePanel";
import { Overlay } from "./components/ui/Overlay";
import { SlidePanel } from "./components/ui/SlidePanel";

function App() {
  const { isOpen, openPanel, closePanel } = usePanel();

  return (
    <>
      {/* UI Button */}
      <button
        onClick={openPanel}
        className="z-30 fixed bottom-4 right-4 bg-yellow-400 border-4 border-black text-black px-6 py-3 font-extrabold text-xl shadow-[6px_6px_0px_black]"
      >
        Assets
      </button>

      {/* UI Elements */}
      <Overlay isOpen={isOpen} onClose={closePanel} />
      <SlidePanel isOpen={isOpen} onClose={closePanel} />
    </>
  );
}

export default App;
