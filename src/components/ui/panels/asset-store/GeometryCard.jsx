import React from "react";
import { useInventoryStore } from "../../../../store/user/inventoryStore";
import { Button } from "../../shared/button/Button";

const GeometryCard = ({ geometry }) => {
  const { items, addItem } = useInventoryStore();

  const isOwned = items.some((item) => item.id === geometry.id);
  return (
    <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_black]">
      <h3 className="font-bold">{geometry.name}</h3>

      {isOwned ? (
        <p className="mt-2 font-bold">Owned</p>
      ) : (
        <Button className="mt-2 px-3 py-1" onClick={() => addItem(geometry)}>
          Add to Inventory
        </Button>
      )}
    </div>
  );
};

export default GeometryCard;
