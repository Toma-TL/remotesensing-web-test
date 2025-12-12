import React, { useState } from "react";
import Carte from "./components/Carte";
import Panneau from "./components/Panneau";
import InfoPanel from "./components/InfoPanel";

function App() {
  const [map, setMap] = useState(null);

  return (
    <div>
      <Carte setMap={setMap} />
      {map && <InfoPanel map={map} />}
      <Panneau />
    </div>
  );
}

export default App;
