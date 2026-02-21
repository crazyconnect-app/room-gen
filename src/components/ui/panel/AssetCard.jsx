import React from "react";

export const AssetCard = ({ name }) => {
  return (
    <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_black] cursor-pointer hover:translate-x-1 hover:translate-y-1 transition">
      {name}
    </div>
  );
};
