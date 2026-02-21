import React from "react";

export const Overlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />;
};
