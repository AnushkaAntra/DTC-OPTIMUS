"use client";
import Schedule from "@/components/custom/Schedule";
import {
  getDriverByAvailability,
  getDriverByNotAvailability,
} from "@/lib/actions/driver.actions";
import {
  createManyCrew,
  getCrewByAvailability,
  getCrewByNotAvailability,
} from "@/lib/actions/crew.actions";
import { getRoostersForToday } from "@/lib/actions/rooster.actions";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CrewDetails() {
  const [crewsAvailable, setAvailableCrews] = useState(null);
  const [crewsNotAvailable, setNotAvailableCrews] = useState(null);

  // useEffect(() => {
  //   // fetch
  //   const fetchData = async () => {
  //     const rooster = await getRoostersForToday();

  //     const schedule = Object.entries(rooster.data).map(([key, value]) => {
  //       return [value];
  //     });
  //     setSchedule(schedule);
  //   };

  //   fetchData();
  // }, []);

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

  /* for add mock crew data

  useEffect(() => {

    const fetchCrews = async () => {
      const crews = await createManyCrew();
      setCrews(crews)
    }

    fetchCrews();
  }, [])
  
  */

  // Fetch available and not-available drivers data from the API
  // const available = await getDriverByAvailability();
  // const notAvailable = await getDriverByNotAvailability();

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
          <div className="h-80 overflow-y-auto">
            {crewsAvailable? (
              crewsAvailable.map((crew) => (
                <Link
                  href={"/crew-details/" + crew?.driver?._id}
                  key={crew._id}
                >
                  <div className="flex gap-2">
                    <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                      <h3 className="text-lg font-medium text-tertiary">
                        {crew?._id}
                      </h3>
                    </div>
                    <div className="flex">
                      <Schedule />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center py-4">No available crews</p>
            )}
          </div>
        </div>

        {/* Not Available Crews */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-secondary bg-primary py-3 px-4">
            Not Available Crews
          </h2>
          <div className="h-96 overflow-y-auto">
            {crewsNotAvailable? (
              crewsNotAvailable?.map((crew) => (
                <Link
                  href={"/crew-details/" + crew?.driver._id}
                  key={crew?._id}
                >
                  <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                    <h3 className="text-lg font-medium text-tertiary">
                      {crew?._id}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center py-4">No not available crews</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
