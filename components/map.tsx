"use client";

import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

declare global {
  interface Window {
    google: any;
  }
}

function Map({ address }: { address: string }) {
  const mapRef = useRef(null);
  const geocoder = useMemo(() => {
    if (typeof window !== "undefined" && window.google) {
      return new window.google.maps.Geocoder();
    }
    return null;
  }, []);

  useEffect(() => {
    if (geocoder) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
      });

      loader.load().then(() => {
        geocoder.geocode({ address: address }, (results: any, status: any) => {
          if (status === "OK") {
            const map = new window.google.maps.Map(mapRef.current!, {
              center: results[0].geometry.location,
              zoom: 8,
            });
            const marker = new window.google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          } else {
            console.error(
              `Geocode was not successful for the following reason: ${status}`
            );
          }
        });
      });
    }
  }, [address, geocoder]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default Map;
