import "./App.css";
import { Overlay } from "./components/ui/overlay/Overlay";
import { Button } from "./components/ui/shared/button/Button";
import AssetPanel from "./components/ui/panels/asset-panel/AssetPanel";
import { useUIPanelStore } from "./store/ui/panelStore";
import Experience from "./components/three/Experience";

function App() {
  const { openPanel } = useUIPanelStore();

  return (
    <div className="w-screen h-screen relative">
      <Experience />
      {/* UI Button */}
      <Button
        onClick={() => openPanel("asset")}
        className="z-30 fixed bottom-4 right-4 px-6 py-3 text-xl"
      >
        Assets
      </Button>

      {/* UI Elements */}
      <Overlay />
      <AssetPanel />
    </div>
  );
}

export default App;
