import React, { useState, useEffect } from "react";

export default function InfoPanel({ map }) {
  const [zoom, setZoom] = useState(0);
  const [center, setCenter] = useState([0,0]);

  useEffect(() => {
    if (!map) return;

    const updateInfo = () => {
      setZoom(map.getZoom().toFixed(2));
      const c = map.getCenter();
      setCenter([c.lng.toFixed(5), c.lat.toFixed(5)]);
    };

    map.on('load', updateInfo);
    map.on('move', updateInfo);
    map.on('zoom', updateInfo);

    return () => {
      map.off('load', updateInfo);
      map.off('move', updateInfo);
      map.off('zoom', updateInfo);
    };
  }, [map]);

  return (
    <div style={{
      position: "fixed",
      top: "10px",
      left: "10px",
      zIndex: 1200,
      backgroundColor: "rgba(255,255,255,0.9)",
      padding: "8px 12px",
      fontFamily: "Courier New, monospace",
      fontSize: "14px",
      borderRadius: "8px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.3)"
    }}>
      Zoom: {zoom}<br />
      Center: [{center[0]}, {center[1]}]
    </div>
  );
}
