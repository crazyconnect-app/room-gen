import { Button } from "../../shared/button/Button";
import { useWorldStore } from "../../../../store/world/worldStore";
import { useUIPanelStore } from "../../../../store/ui/panelStore";

const InventoryItem = ({ item }) => {
  const { addObject } = useWorldStore();
  const { closePanel } = useUIPanelStore();
  return (
    <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_black]">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-full h-40 object-cover border-2 rounded border-black mb-2"
      />
      <Button
        onClick={() => {
          addObject(item);
          closePanel(); // 👈 close after placing
        }}
      >
        Place
      </Button>
    </div>
  );
};

export default InventoryItem;
