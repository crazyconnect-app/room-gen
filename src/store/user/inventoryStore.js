import { create } from "zustand";
export const useInventoryStore = create((set, get) => ({
  items: [],

  addItem: (geometry) => {
    const existingItem = get().items.find((item) => item.id === geometry.id);
    if (existingItem) return;
    set((state) => ({
      items: [...state.items, geometry],
    }));
  },
}));
