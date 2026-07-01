"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


export default function Map() {

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

    if (mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [-71.06776, 42.35816],
      zoom: 9,
    });


    return () => {
      mapRef.current?.remove();
    };

  }, []);


  return (
    <div 
      ref={mapContainerRef}
      className="h-screen w-full"
    />
  );
}