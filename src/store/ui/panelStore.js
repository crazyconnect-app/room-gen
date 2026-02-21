import { create } from "zustand";
export const useUIPanelStore = create((set) => ({
  activePanel: null, // 'asset', 'marketplace', 'profile'

  openPanel: (panelName) => set(() => ({ activePanel: panelName })),
  closePanel: () => set(() => ({ activePanel: null })),
  isPanelOpen: (panelName) => panelName !== null,
}));
