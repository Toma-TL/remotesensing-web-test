import React, { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { Protocol } from "pmtiles";

export default function Carte({ setMap }) {
  useEffect(() => {
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    const mapInstance = new maplibregl.Map({
      container: "map",
      style: {
        version: 8,
        sources: {
          "openmaptiles": {
            type: "vector",
            url: "pmtiles://https://osm.nbg1.your-objectstorage.com/planet.pmtiles"
          }
        },
        layers: [
          { id: "background", type: "background", paint: { "background-color": "#45516E" } }
        ],
        center: [-0.25979, 48.70337],
        zoom: 7.5
      }
    });

    mapInstance.addControl(new maplibregl.NavigationControl());

    // Renvoyer l’instance au parent pour InfoPanel
    setMap(mapInstance);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
}
