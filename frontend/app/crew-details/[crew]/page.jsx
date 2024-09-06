"use client";
import { notFound } from "next/navigation";
import { crewMockData } from "../../../lib/mock.data";
import { useEffect, useState } from "react";
import { getCrewById } from "@/lib/actions/crew.actions";
import { getDriverById } from "@/lib/actions/driver.actions";
import { getConductorById } from "@/lib/actions/conductor.actions";

export default function CrewDetails({ params }) {
  const { crew_id } = params;

  // Fetch data using the dynamic route parameter
  const [crewData, setCrewData] = useState(null);
  const [driver, setDriver] = useState(null);
  const [conductor, setConductor] = useState(null);

  useEffect(() => {
    const fetchCrewData = async () => {
      const data = await getCrewById(crew_id);
      setCrewData(data);
      console.log(data);
      const driver = await getDriverById(data?.driver);
      setDriver(driver);
      const conductor = await getConductorById(data?.conductor);
      setConductor(conductor);
    };

    fetchCrewData();
  }, []);

  return (
    <div className="min-h-screen bg-primary py-8 px-4 text-black">
      <h1 className="text-3xl font-bold text-center text-secondary mb-6">
        Crew Details
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="py-3 px-4 text-left">Field</th>
              <th className="py-3 px-4 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Driver Id
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.driver?.driver_name}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Conductor Id
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.conductor?.driver_name}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Route Id
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.route_id?.map((route) => (<div>
                  {route.route_id + " - " + route.route_name   }
                </div>))}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Rooster Id
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.rooster_id}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Rooster Bus Id
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.rooster_bus_id}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Schedule
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                {crewData?.schedule?.map((status, index) => (
                  <span
                    key={index}
                    className={`block w-4 h-4 rounded-full ${
                      status ? "bg-green-500" : "bg-red-500"
                    } inline-block`}
                  />
                ))}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">
                Status
              </td>
              <td className="py-3 px-4 border-b border-gray-200">
                <div
                  className={`w-5 h-5 rounded-full ${
                    crewData?.status === "available"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}