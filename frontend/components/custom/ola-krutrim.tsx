'use client';
import React, { useEffect, useRef } from 'react';
import '@/public/OlaMapsWebSDK/style.css';
import { OlaMaps } from '@/public/OlaMapsWebSDK/olamaps-js-sdk.es';

interface KrutrimMapProps {
    // Define your prop types here
    live?: boolean,
    routes?: boolean,
}

function KrutrimMap(props: KrutrimMapProps) {
    const olaMaps = new OlaMaps({
    apiKey: 'DYmTmhf7Q2g2PHpFpgm3sWR7HqQtaABzIVHzg96e',
  });

  const mapRef = useRef(null); 
  
  useEffect(() => {
      const mapContainer = mapRef.current;
      const map = olaMaps.init({
        style: 'https://api.olamaps.io/tiles/vector/v1/styles/default-light-lite/style.json',
        container: mapContainer,
        center: [77.2190938, 28.6331322],
        zoom: 15,
      });
      
      if (props.live) {
        olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' }).setLngLat([77.2190938, 28.6331322]).addTo(map)
      }

      if (props.routes) {
        olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' }).setLngLat([77.2390938, 28.6331322]).addTo(map)
      }

}, []);

  return (
      <div>
          <div ref={mapRef} id="map" className="h-[99vh] w-full"></div>
      </div>
  );
}

export default KrutrimMap;