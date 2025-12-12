import React, { useEffect } from "react";
import maplibregl from "maplibre-gl";

export default function Carte({ setMap }) {
  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: "map",
      style: "https://api.maptiler.com/maps/land-gradient-dark/style.json?key=xX6tlHbHqnG4ROor79FN",
      center: [-0.25979, 48.70337],
      zoom: 7.5
    });

    mapInstance.addControl(new maplibregl.NavigationControl());
    setMap(mapInstance);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 0 }}
    ></div>
  );
}
