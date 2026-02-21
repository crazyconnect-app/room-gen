import "./App.css";
import { Overlay } from "./components/ui/overlay/Overlay";
import { Button } from "./components/ui/shared/button/Button";
import AssetPanel from "./components/ui/panels/asset-panel/AssetPanel";
import { useUIPanelStore } from "./store/ui/panelStore";
import Experience from "./components/three/Experience";
import AssetStorePanel from "./components/ui/panels/asset-store/AssetStorePanel";
import InventoryPanel from "./components/ui/panels/inventory/InventoryPanel";
import TransformToolbar from "./components/ui/editor/TransformToolbar";

function App() {
  const { openPanel } = useUIPanelStore();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Experience />
      <TransformToolbar />
      {/* UI Button */}
      <Button
        onClick={() => openPanel("asset-store")}
        className="fixed bottom-4 right-4 px-6 py-3 z-30"
      >
        Store
      </Button>

      <Button
        onClick={() => openPanel("inventory")}
        className="fixed bottom-4 left-4 px-6 py-3 z-30"
      >
        Inventory
      </Button>

      <AssetStorePanel />
      <InventoryPanel />
    </div>
  );
}

export default App;
