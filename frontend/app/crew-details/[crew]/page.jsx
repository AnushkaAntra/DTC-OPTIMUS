import { getDriverById } from '@/lib/actions/driver.actions';
import { notFound } from 'next/navigation';

export default async function CrewDetails({ params }) {
  const { driver } = params;
  console.log(driver);
  // Fetch data using the dynamic route parameter
  const data = await getDriverById(driver);

  if (!data) {
    // Handle fetch errors or non-existent crew
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary py-8 px-4 text-black">
      <h1 className="text-3xl font-bold text-center text-secondary mb-6">Crew Details</h1>
      
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
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Name</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.driver_name}</td> {/* Assuming data structure */}
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">License Number</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.license_no}</td> {/* Assuming data structure */}
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Phone_no</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.ph_no}</td> {/* Assuming data structure */}
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Address</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.address}</td> {/* Assuming data structure */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
