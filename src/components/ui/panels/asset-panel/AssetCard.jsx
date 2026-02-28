import { useUIPanelStore } from "../../../../store/ui/panelStore";
import { useInventoryStore } from "../../../../store/user/inventoryStore";
import { Button } from "../../shared/button/Button";

export const AssetCard = ({ asset }) => {
  const { items, addItem } = useInventoryStore();
  const { closePanel } = useUIPanelStore();
  const isOwned = items.some((item) => item.id === asset.id);
  return (
    <div className="bg-white border-4 border-black p-3 shadow-[6px_6px_0px_black] cursor-pointer hover:translate-x-1 hover:translate-y-1 transition">
      <img
        src={asset.thumbnail}
        alt={asset.name}
        className="w-full h-50 object-cover border-4 border-black"
      />
      <h3 className="mt-2 font-bold">{asset.name}</h3>

      {isOwned ? (
        <p className="mt-2 font-bold">Collected</p>
      ) : (
        <Button
          className="mt-2 px-3 py-1"
          onClick={() => {
            addItem(asset);
            closePanel(); // 👈 close after collecting
          }}
        >
          Collect
        </Button>
      )}
    </div>
  );
};
