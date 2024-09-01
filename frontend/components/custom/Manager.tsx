'use client'; // Mark the component as a Client Component

import React, { useState } from 'react';

const Home = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
             <h2 className="font-bold ">Crew Details</h2> {/* Adjust text size if needed */}
             <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">More Details</button>
           </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-gray-200">
                  
                  <th className="p-3 border-b border-gray-300">Name</th>
                  <th className="p-3 border-b border-gray-300">Total Route</th>
                  <th className="p-3 border-b border-gray-300">Current Route</th>
                  <th className="p-3 border-b border-gray-300"></th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {/* Row 1 */}
                <tr className="hover:bg-gray-50">
                
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td className="p-3 border-b border-gray-300">Purple</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                  </td>
                  <td className="p-3 border-b border-gray-300">Red</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    Rowe-Schoen
                    <br />
                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                  </td>
                  <td className="p-3 border-b border-gray-300">Crimson</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    Wyman-Ledner
                    <br />
                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                  </td>
                  <td className="p-3 border-b border-gray-300">Indigo</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* New Table */}
        <div className="w-full max-w-screen-xl bg-white p-4 rounded-lg shadow-md">
          
          {/* Table Title */}
          <h2 className="font-bold mb-4">Additional Details</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-gray-200">
                  
                  <th className="p-3 border-b border-gray-300">Bus No.</th>
                  <th className="p-3 border-b border-gray-300">Current Route</th>
                  <th className="p-3 border-b border-gray-300">Total Route</th>
                  <th className="p-3 border-b border-gray-300"></th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {/* Row 1 */}
                <tr className="hover:bg-gray-50">
                
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">Emma Smith</div>
                        <div className="text-sm opacity-50">Canada</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">Software Engineer</td>
                  <td className="p-3 border-b border-gray-300">Toronto</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">Lucas Brown</div>
                        <div className="text-sm opacity-50">UK</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">Project Manager</td>
                  <td className="p-3 border-b border-gray-300">London</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">Olivia Johnson</div>
                        <div className="text-sm opacity-50">Germany</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">Marketing Specialist</td>
                  <td className="p-3 border-b border-gray-300">Berlin</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-gray-50">
                  
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">Liam Wilson</div>
                        <div className="text-sm opacity-50">Australia</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-300">UX Designer</td>
                  <td className="p-3 border-b border-gray-300">Sydney</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="btn btn-ghost btn-s">details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
