import { useGeometryStore } from "../../../../store/marketplace/geometryStore";
import { useUIPanelStore } from "../../../../store/ui/panelStore";
import GeometryCard from "./GeometryCard";
import { Button } from "../../shared/button/Button";

const AssetStorePanel = () => {
  const { activePanel, closePanel } = useUIPanelStore();
  const { geometries } = useGeometryStore();
  const isOpen = activePanel === "asset-store";
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-yellow-300 border-l-4 border-black z-50
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b-4 border-black">
        <h2 className="text-2xl font-extrabold">Asset Store</h2>
        <Button variant="secondary" onClick={closePanel}>
          X
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {geometries.map((g) => (
          <GeometryCard key={g.id} geometry={g} />
        ))}
      </div>
    </div>
  );
};

export default AssetStorePanel;
