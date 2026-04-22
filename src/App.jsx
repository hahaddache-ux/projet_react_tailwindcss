import { useState, useEffect, use } from "react";
import "./App.css";
import Module from "./Module";
function App() {
  const [theme, setTheme] = useState("default");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className=" bg-ui-bg min-h-screen flex flex-col items-center justify-center">
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => {
              setTheme("default");
            }}
            className="px-4 py-2 bg-blue-600 rounded font-bold text-white"
          >
            Default
          </button>
          <button
            onClick={() => {
              setTheme("midnight");
            }}
            className="px-4 py-2 bg-purple-600 rounded font-bold text-white"
          >
            {" "}
            midnight
          </button>
          <button
            onClick={() => {
              setTheme("forest");
            }}
            className="px-4 py-2 bg-emerald-600 rounded font-bold text-white"
          >
            Forest
          </button>
        </div>
        <Module />
      </div>
    </>
  );
}

export default App;
