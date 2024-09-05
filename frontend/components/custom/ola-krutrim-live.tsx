"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/sdk/OlaMapsWebSDK/style.css";
import { OlaMaps } from "@/sdk/OlaMapsWebSDK/olamaps-js-sdk.es";
import { stops, stopCoordinates } from "@/sdk/map-resources/stops";
import stopNameMap from "@/sdk/map-resources/stop-name-map";
// import busRoutes from "@/sdk/map-resources/bus-routes";
import formattedRoutes from "@/sdk/map-resources/formatted-route-stop";

interface KrutrimMapProps {
  routeId?: boolean;
  liveBus?: boolean;
  stops?: number[];
  busCoords?: any[];
}

export function KrutrimMapLive(props: KrutrimMapProps) {
  const olaMaps = useMemo(
    () =>
      new OlaMaps({
        apiKey: "DYmTmhf7Q2g2PHpFpgm3sWR7HqQtaABzIVHzg96e",
      }),
    []
  );


  const mapRef = useRef(null);
  const [map, setMap] = useState(null);


  const localData: string | null = localStorage.getItem("currentRouteId");
  const { index, vehicleData }: { index: number, vehicleData: any } = localData ? JSON.parse(localData) : { index: 0, vehicleData: null };
  // console.log(vehicleData[0]);


  // Create the map layout
  useEffect(() => {
    const mapContainer = mapRef.current;
    const initializedMap = olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-dark-lite/style.json",
      container: mapContainer,
      center: [77.2190938, 28.6331322],
      zoom: 9.7,
    });

    olaMaps.addNavigationControls;

    setMap(initializedMap);
  }, []);

  //   // Display Bus Stops
  //   useEffect(() => {
  //     if (!map) return;

  //   }, [map, olaMaps]);

  // Display Bus routes
  useEffect(() => {
    if (!map) return;

    if (props.routeId) {
      showRoutes(olaMaps, map, Number(vehicleData?.[0] || []));

    }
  }, [map, props.routeId, olaMaps]);


  // Display Live routes:

  useEffect(() => {
    if (!map) return;

    if(props.liveBus) {
      showLiveBuses(olaMaps, map, vehicleData[1]);
    }
  })
  return (
    <>
      <div ref={mapRef} id="map" className="h-full w-full"></div>
    </>
  );
}

async function showLiveBuses(olaMaps: any, map: any, tripData: any) {
  // For every bus, fetch it's coordinates
  console.log("Trip data",tripData)

  tripData.map((dataPoint: any) => {
      const {latitude, longitude} = dataPoint.position;
      const {label} = dataPoint.vehicle;
      const {startTime} = dataPoint.trip;
      console.log(latitude, longitude, label, startTime);

      const popup = olaMaps
      .addPopup({ offset: [0, -30], anchor: "bottom" })
      .setHTML(`<div>${label}</div>`);
    
      olaMaps
      .addMarker({ offset: [0, 6], anchor: "bottom", color: "red" })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map);


  });
  // const data = tripData

}

async function showRoutes(olaMaps: any, map: any, routeIds: any) {
  // For every bus route, fetch the stops and extract coordinates out of it,
  const stopIds = formattedRoutes[routeIds].stops;
  // For each stopId, we need the Longitude and latitude
  const coordinates = stopIds
    .map((stopId) => {
      const stop = stopCoordinates[stopId];
      if (stop) {
        return [stopNameMap[stopId].stop_name, stop.stop_lon, stop.stop_lat];
      }
      return null;
    })
    .filter((coord) => coord !== null);

  // Cool, now we have coordinates of all bus stops in that route.
  // We must draw a path joining all the bus stops. Typically, it's a straight line between the stops
  // But... we can't just fly over buildings right? We need coordinates of the nearest road. Hence, we will be
  // snapping the coordinates to the nearest road in order to define a clear route.

  showRouteStops(olaMaps, map, coordinates);

  const data = await getSnappedCoordinates(
    coordinates.map((coord) => coord.slice(1))
  );

  const snappedCoordinates = data.snapped_points.map(
    (point: { location: { lat: any; lng: any } }) => [
      point.location.lng,
      point.location.lat,
    ]
  );

  // console.log("Snapped coordinates", snappedCoordinates);

  // If it highlights as an error, ignore it, it works. Error highlighting is due to using hooks to render the map
  // So, it cannot readily fetch the properties of map unless it is loaded on the browser.
  // Will fix this on a later build.
  map.on("load", () => {
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: snappedCoordinates, // Extracting longitude and latitude
        },
      },
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: { "line-join": "round", "line-cap": "round" },
      paint: {
        "line-color": "#4c3eff",
        "line-width": 4,
      },
    });
  });

  // console.log(busRoutes[0].stops);
}

async function getSnappedCoordinates(coordinates: any[][]) {
  const reversedCoordinates = coordinates.map((coord) => coord.reverse());
  const points = reversedCoordinates
    .map((coord: any[]) => coord.join(","))
    .join("%7C");
  const url = `https://api.olamaps.io/routing/v1/snapToRoad?points=${points}&enhancePath=true&api_key=DYmTmhf7Q2g2PHpFpgm3sWR7HqQtaABzIVHzg96e`;
  const response = await fetch(url, {
    headers: {
      "X-Request-Id": "XXX",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function showRouteStops(
  olaMaps: any,
  map: any,
  markerCoordinates: any[][]
) {
  const tempCoordinates = markerCoordinates.map((coord) => coord.slice(1));

  tempCoordinates.forEach((coordinates, index) => {
    const popup = olaMaps
      .addPopup({ offset: [0, -30], anchor: "bottom" })
      .setHTML(`<div>${markerCoordinates[index][0]}</div>`);
    olaMaps
      .addMarker({ offset: [0, 6], anchor: "bottom" })
      .setOpacity(0.6)
      .setLngLat(coordinates)
      .setPopup(popup)
      .addTo(map);
  });
}

export default KrutrimMapLive;
