import { useAssetCatalogStore } from "../../../../store/marketplace/assetCatalogStore";
import { useUIPanelStore } from "../../../../store/ui/panelStore";
import { Button } from "../../shared/button/Button";
import { AssetCard } from "./AssetCard";

const AssetPanel = () => {
  const { activePanel, closePanel } = useUIPanelStore();
  const { assets } = useAssetCatalogStore();

  const isOpen = activePanel === "asset";

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-pink-300 border-l-4 border-black z-50 
      transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b-4 border-black">
        <h2 className="text-2xl font-extrabold">Assets</h2>

        <Button variant="secondary" onClick={closePanel} className="px-3 py-1">
          X
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};
export default AssetPanel;
