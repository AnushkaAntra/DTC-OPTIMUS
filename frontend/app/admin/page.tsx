"use client";
import { Suspense } from 'react'
import RouteCard from '@/components/ui/routeCard';
import SearchButton from '@/components/ui/searchButton';
import React, { useEffect, useState } from 'react';
import formattedRoutes from '@/sdk/map-resources/formatted-route-stop';
import stopNameMap from '@/sdk/map-resources/stop-name-map';
import KrutrimMapLive from '@/components/custom/ola-krutrim-live';


type Props = { activeRouteCount: any }

const Page = (props: Props) => {
  const [data, setData] = useState<any>(null);
  const [highlight, setHighlight] = useState<number>(0);
  const[storage, setStorage] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/transitData');
        setData(await response.json());
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const localData: string | null = localStorage.getItem("currentRouteId");
    setStorage(localData);
    const { index: highlightIndex, vehicleData }: { index: number, vehicleData: any } = localData ? JSON.parse(localData) : { index: 0, vehicleData: null };
    setHighlight(highlightIndex)
  }, []);

  // const localData: string | null = localStorage.getItem("currentRouteId");
  // const { index: highlightIndex, vehicleData }: { index: number, vehicleData: any } = localData ? JSON.parse(localData) : { index: 0, vehicleData: null };
  // setHighlight(highlightIndex)

  return (
    <div className="flex flex-row h-screen w-full ">
      <div className="h-screen w-[37%] min-w-64 bg-gray-400">
        <div className="sticky top-0 bg-gray-400 z-10">
          <h1 className="font-inter text-gray-50 font-bold p-4">Active Routes: {data && data.length} </h1>
          <SearchButton />
        </div>
        <Suspense fallback={<p>Loading feed...</p>}>
          <div className="my-8 overflow-y-auto h-[calc(100%-72px)]"> {/* Adjust height as needed */}
            {data && data.map((item: any, index: number) => (
              <RouteCard
                key={index}
                data={item}
                index={index}
                highlight={highlight}
                setHighlight={setHighlight}
                setStorage={setStorage} />
            ))}
          </div>
        </Suspense>
      </div>
      <div className="h-screen w-full">
        <KrutrimMapLive routeId={true} liveBus={true} />
      </div>
    </div>

  )
}
export default Page