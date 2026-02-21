import { create } from "zustand";

export const useGeometryStore = create(() => ({
  geometries: [
    { id: "box", name: "Box", type: "box" },
    { id: "sphere", name: "Sphere", type: "sphere" },
    { id: "cylinder", name: "Cylinder", type: "cylinder" },
    { id: "cone", name: "Cone", type: "cone" },
  ],
}));
