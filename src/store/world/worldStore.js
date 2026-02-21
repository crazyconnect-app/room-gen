import { create } from "zustand";
import { nanoid } from "nanoid";
export const useWorldStore = create((set) => ({
  placedObjects: [],
  selectedId: null,
  transformMode: "translate", // translate | rotate | scale

  // Grid Helper
  gridSize: 1,
  snapEnabled: true,
  setTransformMode: (mode) => set({ transformMode: mode }),
  toggleSnap: () => set((s) => ({ snapEnabled: !s.snapEnabled })),

  addObject: (geometryType) =>
    set((state) => ({
      placedObjects: [
        ...state.placedObjects,
        {
          id: nanoid(),
          type: geometryType,
          position: [0, 0.5, 0],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
      ],
    })),

  selectObject: (id) => set({ selectedId: id }),

  updateObject: (id, newProps) =>
    set((state) => ({
      placedObjects: state.placedObjects.map((obj) =>
        obj.id === id ? { ...obj, ...newProps } : obj,
      ),
    })),

  removeObject: (id) =>
    set((state) => ({
      placedObjects: state.placedObjects.filter((obj) => obj.id !== id),
      selectedId: state.selectedId === id ? null : state.selectedId,
    })),
}));
