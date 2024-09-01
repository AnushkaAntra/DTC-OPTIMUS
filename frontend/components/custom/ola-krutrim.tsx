"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/sdk/OlaMapsWebSDK/style.css";
import { OlaMaps } from "@/sdk/OlaMapsWebSDK/olamaps-js-sdk.es";
import { stops, stopCoordinates } from "@/sdk/map-resources/stops";

import stopNameMap from "@/sdk/map-resources/stop-name-map";
import busRoutes from "@/sdk/map-resources/bus-routes";

interface KrutrimMapProps {
  showlive?: boolean;
  showstops?: boolean;
  showroutes?: boolean;
  displayedStops?: string[];
  displayedRoutes?: string[];
}

function KrutrimMap(props: KrutrimMapProps) {
  const olaMaps = useMemo(
    () =>
      new OlaMaps({
        apiKey: "DYmTmhf7Q2g2PHpFpgm3sWR7HqQtaABzIVHzg96e",
      }),
    []
  );

  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // Create the map layout
  useEffect(() => {
    const mapContainer = mapRef.current;
    const initializedMap = olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-lite/style.json",
      container: mapContainer,
      center: [77.2190938, 28.6331322],
      zoom: 9.7,
    });

    olaMaps.addNavigationControls;

    setMap(initializedMap);
  }, []);

  // Display Bus Stops
  useEffect(() => {
    if (!map) return;

    if (props.showstops) {
      // console.log(markerCoordinates[0]);

      // markerCoordinates.forEach((coordinates) => {
      //   olaMaps.addMarker({ offset: [0, 6], anchor: 'bottom' })
      //   .setLngLat(coordinates)
      //   .addTo(map);
      // });
      const markerCoordinates = stops.map((stop) => [
        stop.stop_lon,
        stop.stop_lat,
      ]);
      console.log(markerCoordinates.length);
      for (let index = 0; index <= 100; index++) {
        olaMaps
          .addMarker({ offset: [0, 6], anchor: "bottom" })
          .setLngLat(markerCoordinates[index])
          .addTo(map);
      }
    }
  }, [props.showlive, props.showstops, map, olaMaps]);

  // Display Live Transit Feed
  useEffect(() => {
    if (!map) return;

    if (props.showlive) {
      // showLiveTransit(map, olaMaps);
    }
  }, [props.showlive, map, olaMaps]);

  // Display Bus routes
  useEffect(() => {
    if (!map) return;

    if (props.showroutes) {
      showRoutes(map, []);
    }
  }, [map, props.showroutes, olaMaps]);

  return (
    <>
      <div ref={mapRef} id="map" className="h-full w-full"></div>
    </>
  );
}

// function showLiveTransit(map: any, olaMaps: any) {
//   // const socket = io("http://localhost:8080/data.json");

//   socket.on("connect", () => {
//     console.log("Socket connected");
//     // Perform any necessary actions after the socket connection is established
//   });

//   socket.on("disconnect", () => {
//     console.log("Socket disconnected");
//     // Perform any necessary actions after the socket connection is disconnected
//   });

//   // Add your socket event listeners and handlers here
//   // For example:
//   socket.on("liveTransitData", (data: any) => {
//     console.log("Received live transit data:", data);
//     // Process the received data and update the map accordingly
//   });

//   // Rest of the code...
//   olaMaps
//     .addMarker({ offset: [0, 6], anchor: "bottom" })
//     .setLngLat(["77.2190938", "28.6331322"])
//     .addTo(map);
// }

// Routes done, need to pass in some routeIds to display the data, gotta implement this


async function showRoutes(map: any, routeIds: number[]) {
  // For every bus route, fetch the stops and extract coordinates out of it,
  const stopIds = busRoutes[1].stops;
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

  const data = await getSnappedCoordinates(
    coordinates.map((coord) => coord.slice(1))
  );

  const snappedCoordinates = data.snapped_points.map(
    (point: { location: { lat: any; lng: any } }) => [
      point.location.lng,
      point.location.lat,
    ]
  );

  console.log("Snapped coordinates", snappedCoordinates);

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

  console.log(busRoutes[0].stops);
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

export default KrutrimMap;
