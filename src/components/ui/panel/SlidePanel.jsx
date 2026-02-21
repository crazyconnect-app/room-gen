import React from "react";
import { AssetCard } from "./AssetCard";
import { Button } from "../shared/button/Button";

export const SlidePanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-pink-300 border-black z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-4 border-black">
        <h2 className="text-2xl font-extrabold">Assets</h2>

        <Button variant="secondary" onClick={onClose} className="px-3 py-1">
          X
        </Button>
      </div>
      {/* Content */}
      <div className="p-4 space-y-4">
        <AssetCard name="Chair" />
        <AssetCard name="Table" />
        <AssetCard name="Plant" />
      </div>
    </div>
  );
};
