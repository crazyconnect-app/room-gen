import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline text-blue-500">Hello world!</h1>
      <button className="z-20 absolute bottom-4 right-4 bg-indigo-500 text-white  px-4 py-2 rounded font-bold text-2xl">
        Assets
      </button>
    </>
  );
}

export default App;
