import { Button } from "../shared/button/Button";
import { useWorldStore } from "../../../store/world/worldStore";

const TransformToolbar = () => {
  const {
    selectedId,
    transformMode,
    setTransformMode,
    removeObject,
    snapEnabled,
    toggleSnap,
  } = useWorldStore();
  if (!selectedId) return null;
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-yellow-300 border-4 border-black p-3 shadow-[6px_6px_0px_black] flex gap-3 z-50">
      <Button
        variant={snapEnabled ? "active" : "secondary"}
        onClick={toggleSnap}
        className="px-3 py-1"
      >
        Snap
      </Button>
      <Button
        variant={transformMode === "translate" ? "primary" : "secondary"}
        onClick={() => setTransformMode("translate")}
        className="px-3 py-1"
      >
        Move
      </Button>

      <Button
        variant={transformMode === "rotate" ? "primary" : "secondary"}
        onClick={() => setTransformMode("rotate")}
        className="px-3 py-1"
      >
        Rotate
      </Button>

      <Button
        variant={transformMode === "scale" ? "primary" : "secondary"}
        onClick={() => setTransformMode("scale")}
        className="px-3 py-1"
      >
        Scale
      </Button>

      <Button
        variant="danger"
        onClick={() => removeObject(selectedId)}
        className="px-3 py-1"
      >
        Delete
      </Button>
    </div>
  );
};

export default TransformToolbar;
