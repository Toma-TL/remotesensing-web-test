import React, { useState } from "react";
import Carte from "./components/Carte";
import InfoPanel from "./components/InfoPanel";
import Panneau from "./components/Panneau";
import "./index.css";

function App() {
  const [map, setMap] = useState(null);

  return (
    <div>
      {/* Wrapper plein écran pour la carte */}
      <div
        id="map-wrapper"
        style={{ width: "100%", height: "100vh", position: "relative", zIndex: 0 }}
      >
        <Carte setMap={setMap} />
      </div>

      {/* Panneau info */}
      {map && <InfoPanel map={map} />}

      {/* Panneau droit */}
      <Panneau />
    </div>
  );
}

export default App;
