"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCrewByAvailability,
  getCrewByNotAvailability,
} from "../../lib/actions/crew.actions";

export default function CrewDetails() {
  const [crewsAvailable, setAvailableCrews] = useState(null);
  const [crewsNotAvailable, setNotAvailableCrews] = useState(null);

  useEffect(() => {
    const fetchAvailableCrews = async () => {
      const allCrews = await getCrewByAvailability();
      setAvailableCrews(allCrews);
    };
    fetchAvailableCrews();
  }, []);

  useEffect(() => {
    const fetchNotAvailableCrews = async () => {
      const allCrews = await getCrewByNotAvailability();
      setNotAvailableCrews(allCrews);
    };
    fetchNotAvailableCrews();
  }, []);

  return (
    <div className="bg-primary min-h-screen py-8 px-4 text-black">
      <h1 className="text-4xl font-bold text-center text-secondary mb-6">
        Crew Details
      </h1>
      <div className="space-y-8">
        {/* Available Crews */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-secondary bg-primary py-3 px-4">
            Available Crews
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-3 px-4 text-left">Crew ID</th>
                  <th className="py-3 px-4 text-left">Schedule</th>
                  <th className="py-3 px-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {crewsAvailable ? (
                  crewsAvailable.map((crew) => (
                    <tr key={crew._id}>
                      <td className="py-3 px-4 border-b border-gray-200">
                        {crew?._id}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        {/* Show part of the schedule */}
                        {crew?.schedule.slice(0, 10).map((status, index) => (
                          <span
                            key={index}
                            className={`block w-4 h-4 rounded-full ${
                              status ? "bg-green-500" : "bg-red-500"
                            } inline-block`}
                          />
                        ))}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        <Link href={"/crew-details/" + crew?._id}>
                          <p className="text-blue-500">View Details</p>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">
                      No available crews
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Not Available Crews */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-secondary bg-primary py-3 px-4">
            Not Available Employees
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-3 px-4 text-left">Crew ID</th>
                  {/* <th className="py-3 px-4 text-left">Schedule</th> */}
                  <th className="py-3 px-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {crewsNotAvailable ? (
                  crewsNotAvailable.map((crew) => (
                    <>
                      <tr key={crew?.driver?._id}>
                        <td className="py-3 px-4 border-b border-gray-200">
                          {crew?.driver?.driver_name}
                        </td>
                        {/* <td className="py-3 px-4 border-b border-gray-200">
                      {crew?.schedule.slice(0, 10).map((status, index) => (
                        <span key={index} className={`block w-4 h-4 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'} inline-block`} />
                      ))}
                    </td> */}
                        <td className="py-3 px-4 border-b border-gray-200">
                          {/* <Link href={"/crew-details/" + crew?.driver?._id}>
                        <p className="text-blue-500">View Details</p>
                      </Link> */}
                          {crew?.driver?.status}
                        </td>
                      </tr>
                      <tr key={crew?.conductor?._id}>
                        <td className="py-3 px-4 border-b border-gray-200">
                          {crew?.conductor?.driver_name}
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200">
                          {crew?.conductor?.status}
                        </td>
                      </tr>
                    </>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">
                      No available crews
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
