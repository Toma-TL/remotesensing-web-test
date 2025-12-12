import React, { useState } from "react";

export default function Panneau() {
  const [open, setOpen] = useState(true);
  const layers = ["background", "water", "landcover"]; // exemple

  return (
    <div style={{
      position: "fixed",
      top: "25%",
      bottom: "5%",
      right: open ? "0" : "-220px",
      width: "200px",
      backgroundColor: "rgba(120,120,120,0.95)",
      transition: "right 0.3s",
      padding: "10px",
      borderRadius: "15px",
      zIndex: 1000,
      boxShadow: "-2px 0 5px rgba(0,0,0,0.3)"
    }}>
      <button onClick={() => setOpen(!open)} style={{ marginBottom: "10px", cursor: "pointer" }}>☰</button>
      <ul>
        {layers.map(layer => <li key={layer}>{layer}</li>)}
      </ul>
    </div>
  );
}
