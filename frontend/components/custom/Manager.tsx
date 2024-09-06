'use client'; // Mark the component as a Client Component

import { getAllDrivers } from '@/lib/actions/driver.actions';
import { useEffect, useState } from 'react';

const Home = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [drivers, setDrivers] = useState<any[]>([]); // Adjust type as needed

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Fetch drivers when the component mounts
  useEffect(() => {
    async function fetchDrivers() {
      try {
        const fetchedDrivers = await getAllDrivers();
        setDrivers(fetchedDrivers);
      } catch (error) {
        console.error("Failed to fetch drivers:", error);
      }
    }

    fetchDrivers();
  }, []);

  return (
    <main className="relative min-h-screen p-4 bg-gray-50 text-black">
      {/* Dropdown Component */}
      <div className="absolute top-20 left-10 flex items-center">
        <div className="relative">
          {/* Avatar and Text Container */}
          <div className="flex items-center">
            <div
              className="w-20 h-20 rounded-full overflow-hidden cursor-pointer"
              onClick={toggleDropdown} // Toggle dropdown on click
            >
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="ml-4">
              {/* Employee Name */}
              <div className="text-lg font-bold">John Doe</div>
              {/* Employee Designation */}
              <div className="text-sm text-gray-500">DTC GOVT</div>
            </div>
          </div>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      
      {/* Adjusted Distance for the Table */}
      <div className="mt-24 flex flex-col items-center"> {/* Added margin-top class mt-24 for spacing and centered */}
        <div className="w-full max-w-screen-xl bg-white p-4 rounded-lg shadow-md mb-8"> {/* Added mb-8 for bottom margin */}
          
          {/* Table Title */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Crew Details</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">More Details</button>
          </div>

          <div className="relative">
            {/* Container for the table with fixed height and scroll */}
            <div className="overflow-y-auto max-h-96"> {/* Adjust max-h-96 as needed for desired height */}
              <table className="min-w-full border-collapse border border-gray-300">
                {/* Table Head */}
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 border-b border-gray-300">Name</th>
                    <th className="p-3 border-b border-gray-300">Phone Number</th>
                    <th className="p-3 border-b border-gray-300">Licence Number</th>
                    <th className="p-3 border-b border-gray-300"></th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {drivers.map((driver) => (
                    <tr key={driver._id} className="hover:bg-gray-50">
                      <td className="p-3 border-b border-gray-300">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={driver.avatar || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                alt="Avatar"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{driver.driver_name}</div>
                            <div className="text-sm opacity-50">{driver.country}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border-b border-gray-300">{driver.ph_no}</td>
                      <td className="p-3 border-b border-gray-300">{driver.license_no}</td>
                      <td className="p-3 border-b border-gray-300">
                        <button className="btn btn-ghost btn-s">details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* New Table */}
       
      </div>
    </main>
  );
};

export default Home;