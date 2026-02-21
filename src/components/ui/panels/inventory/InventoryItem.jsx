import { Button } from "../../shared/button/Button";
import { useWorldStore } from "../../../../store/world/worldStore";

const InventoryItem = ({ item }) => {
  const { addObject } = useWorldStore();
  return (
    <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_black]">
      <p>{item.name}</p>
      <Button onClick={() => addObject(item.type)}>Place</Button>
    </div>
  );
};

export default InventoryItem;
