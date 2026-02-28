import { create } from "zustand";

export const useAssetCatalogStore = create(() => ({
  assets: [
    {
      id: "lowpoly-house",
      name: "Low poly House",
      thumbnail: "assets/images/low_poly_house_window.png",
      modelPath: "assets/models/house/lowpoly_house.glb",
      category: "house",
    },
  ],
}));
