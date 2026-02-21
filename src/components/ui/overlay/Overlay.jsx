import { useUIPanelStore } from "../../../store/ui/panelStore";

export const Overlay = () => {
  const { activePanel, closePanel } = useUIPanelStore();
  if (!activePanel) return null;

  return (
    <div onClick={closePanel} className="fixed inset-0 bg-black/40 z-40" />
  );
};
