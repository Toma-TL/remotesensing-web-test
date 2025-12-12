import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({ onMapReady }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://api.maptiler.com/maps/backdrop/style.json?key=xX6tlHbHqnG4ROor79FN",
      center: [2.3522, 48.8566],
      zoom: 5,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-left");

    map.on("load", () => {

      // 🔥 On envoie la carte à App.jsx
      if (onMapReady) onMapReady(map);

      map.addSource("v3-lite", {
        type: "vector",
        url: "https://api.maptiler.com/tiles/v3-lite/tiles.json?key=xX6tlHbHqnG4ROor79FN"
      });

      map.addLayer({
        id: "v3-lite-landuse",
        type: "fill",
        source: "v3-lite",
        "source-layer": "landuse",
        paint: {
          "fill-color": "#525252ff",
          "fill-opacity": 0.4
        }
      });

      map.addLayer({
        id: "v3-lite-waterway",
        type: "line",
        source: "v3-lite",
        "source-layer": "waterway",
        paint: {
          "line-color": "#679ecbff",
          "line-width": 1.5
        }
      });

      // Popup
      const popup = new maplibregl.Popup({
        closeButton: true,
        closeOnClick: true,
      });

      map.on("click", "v3-lite-landuse", (e) => {
        const feature = e.features[0];
        const props = feature.properties;

        let info = "";
        for (const key in props) {
          info += `<strong>${key}</strong>: ${props[key]}<br/>`;
        }

        popup.setLngLat(e.lngLat).setHTML(info).addTo(map);
      });

      map.on("mouseenter", "v3-lite-landuse", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "v3-lite-landuse", () => {
        map.getCanvas().style.cursor = "crosshair";
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
