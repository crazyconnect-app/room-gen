import { useUIPanelStore}  from "../../../../store/ui/panelStore";
import { useInventoryStore } from "../../../../store/user/inventoryStore";
import InventoryItem from "./InventoryItem";
import {Button} from "../../shared/button/Button";

const InventoryPanel = () => {
  const { activePanel, closePanel } = useUIPanelStore();
  const { items } = useInventoryStore();

  const isOpen = activePanel === "inventory";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[85%] sm:w-[350px] bg-blue-300 border-r-4 border-black z-50
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b-4 border-black">
        <h2 className="text-2xl font-extrabold">Inventory</h2>
        <Button variant="secondary" onClick={closePanel}>
          X
        </Button>
      </div>

      <div className="p-4 space-y-3">
        {items.length === 0 ? (
          <p>No items yet</p>
        ) : (
          items.map((item) => <InventoryItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default InventoryPanel;
