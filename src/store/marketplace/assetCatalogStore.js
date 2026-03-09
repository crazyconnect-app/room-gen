import { create } from "zustand";

export const useAssetCatalogStore = create(() => ({
  assets: [
    {
      id: "lowpoly-house",
      name: "Low poly House",
      thumbnail: "assets/images/low_poly_house_window.png",
      modelPath: "assets/models/house/lowpoly_house.glb",
      category: "house",
      defaultScale: [1, 1, 1], // user multiplier
      targetHeight: 0.8, // optional: desired normalized height in meters
    },
    {
      id: "lowpoly_chair",
      name: "Cozy Chair",
      thumbnail: "assets/images/chair/lowpoly_chair.png",
      modelPath: "assets/models/chair/lowpoly_chair.glb",
      category: "furniture",
      defaultScale: [1, 1, 1], // user multiplier
      targetHeight: 0.8, // optional: desired normalized height in meters
    },
  ],
}));
