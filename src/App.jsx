import { useState } from "react";
import "./App.css";
import { usePanel } from "./hooks/usePanel";
import { Overlay } from "./components/ui/overlay/Overlay";
import { SlidePanel } from "./components/ui/panel/SlidePanel";
import { Button } from "./components/ui/shared/button/Button";

function App() {
  const { isOpen, openPanel, closePanel } = usePanel();

  return (
    <>
      {/* UI Button */}
      <Button
        onClick={openPanel}
        className="z-30 fixed bottom-4 right-4 px-6 py-3 text-xl"
      >
        Assets
      </Button>

      {/* UI Elements */}
      <Overlay isOpen={isOpen} onClose={closePanel} />
      <SlidePanel isOpen={isOpen} onClose={closePanel} />
    </>
  );
}

export default App;
