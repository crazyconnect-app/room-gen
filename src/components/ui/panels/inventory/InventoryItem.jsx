const InventoryItem = ({ item }) => {
  return (
    <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_black]">
      {item.name}
    </div>
  );
};

export default InventoryItem;
