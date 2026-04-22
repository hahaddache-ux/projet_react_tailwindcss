import React from "react";
import { useState } from "react";

function Module() {
  const [module, setModule] = useState("");
  return (
    <div className="text-center max-w-xl">
      <h1 className="text-6xl font-black text-ui-text mb-6">
        Tailwind v4 <br />
        <span className="text-ui-btn">Themes.</span>
      </h1>

      <p className="text-xl text-ui-text opacity-70 mb-10">
        We are using CSS variables to switch colors instantly across all files,
        no complex logic. Just pure Tailwind.
      </p>

      <button className="px-10 py-4 bg-ui-btn text-ui-bg font-bold rounded-full">
        GET STARTED
      </button>
    </div>
  );
}

export default Module;
