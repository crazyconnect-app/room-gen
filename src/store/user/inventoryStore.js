import { create } from "zustand";
export const useInventoryStore = create((set, get) => ({
  items: [],

  addItem: (asset) => {
    const existingItem = get().items.find((item) => item.id === asset.id);
    if (existingItem) return;
    set((state) => ({
      items: [...state.items, asset],
    }));
  },
}));
