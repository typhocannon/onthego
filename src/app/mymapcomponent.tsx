'use client'

import { useEffect, useRef, ReactElement } from "react";

export default function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<HTMLElement>(null); // Explicitly define the type as HTMLElement

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]); // Include center and zoom in the dependency array

  return <div ref={ref} id="map" style={{ height: "100%"}} />;
}
