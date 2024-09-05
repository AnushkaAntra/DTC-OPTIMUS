import { notFound } from "next/navigation";
import { crewMockData } from '../../../lib/mock.data';

export default async function CrewDetails({ params }) {
  const { crew } = params;

  // Fetch data using the dynamic route parameter
  const data = crewMockData.find(c => c.driver === crew);

  if (!data) {
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
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Driver Id</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.driver}</td> 
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Conductor Id</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.conductor}</td> 
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Route Id</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.route_id.join(", ")}</td> 
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Rooster Id</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.rooster_id}</td> 
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Rooster Bus Id</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.rooster_bus_id}</td> 
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Schedule</td>
              <td className="py-3 px-4 border-b border-gray-200">
                {data.schedule.map((status, index) => (
                  <span key={index} className={`block w-4 h-4 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'} inline-block`} />
                ))}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Status</td>
              <td className="py-3 px-4 border-b border-gray-200">
                <div className={`w-5 h-5 rounded-full ${data.status === "available" ? 'bg-green-500' : 'bg-red-500'}`} />
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
