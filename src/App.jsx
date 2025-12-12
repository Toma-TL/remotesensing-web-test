import React, { useRef } from "react";
import Map from "./components/Map";
import "./App.css";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Contrôles</h2>
        <hr className="separator" />
        <button className="btn-primary"
          onClick={() => mapRef.current?.flyTo({
            center: [2.3522, 48.8566],
            zoom: 12
          })}
        >
          Zoom Paris
        </button>

        <hr className="separator" />
        <button className="btn-primary"
          onClick={() => mapRef.current?.flyTo({
            center: [-54.067995 , -13.102886],
            zoom: 4
          })}
        >
          Zoom vers Bresil
        </button>


        <hr className="separator" />
        <button className="btn-primary"
          onClick={() => {
            const visibility = mapRef.current
              ?.getLayoutProperty("v3-lite-landuse", "visibility");

            mapRef.current?.setLayoutProperty(
              "v3-lite-landuse",
              "visibility",
              visibility === "none" ? "visible" : "none"
            );
          }}
        >
          Afficher landuse
        </button>
      </aside>

      <main className="map-area">
        <Map onMapReady={(map) => (mapRef.current = map)} />
      </main>
    </div>
  );
}

export default App;
