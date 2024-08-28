'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import '@/public/OlaMapsWebSDK/style.css';
import { OlaMaps } from '@/public/OlaMapsWebSDK/olamaps-js-sdk.es';
import stops from '@/public/map-resources/stops';
import stop_mapping from '@/public/map-resources/stops_name_zone_id_map';

interface KrutrimMapProps {
    showlive?: boolean,
    showstops?: boolean,
}

function KrutrimMap(props: KrutrimMapProps) {
    const olaMaps = useMemo(() => new OlaMaps({
        apiKey: 'DYmTmhf7Q2g2PHpFpgm3sWR7HqQtaABzIVHzg96e',
    }), []);

    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const mapContainer = mapRef.current;
        const initializedMap = olaMaps.init({
            style: 'https://api.olamaps.io/tiles/vector/v1/styles/default-light-lite/style.json',
            container: mapContainer,
            center: [77.2190938, 28.6331322],
            zoom: 12,
        });

        setMap(initializedMap);
    }, []);

    useEffect(() => {
        if (!map) return;

        // Clear existing markers
        // map.clearMarkers && map.clearMarkers(); // Assuming `clearMarkers` method exists

        if (props.showlive) {
            olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' })
                .setLngLat(["77.2190938", "28.6331322"])
                .addTo(map);
        }
        if (props.showstops) {
          const markerCoordinates = stops.map(stop => [stop.stop_lon, stop.stop_lat]);
          console.log(markerCoordinates[0]);

          // markerCoordinates.forEach((coordinates) => {
          //   olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' })
          //   .setLngLat(coordinates)
          //   .addTo(map);            
          // });
          for (let index = 0; index <= 20; index++) {
            olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' })
              .setLngLat(markerCoordinates[index])
              .addTo(map);
          }
        }
    }, [props.showlive, props.showstops, map, olaMaps]);

    return (
        <div>
            <div ref={mapRef} id="map" className="h-[99vh] w-full"></div>
        </div>
    );
}

export default KrutrimMap;
