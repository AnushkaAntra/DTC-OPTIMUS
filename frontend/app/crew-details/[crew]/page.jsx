import { notFound } from 'next/navigation';

export default async function CrewDetails({ params }) {
  const { crew } = params;

  // Fetch data using the dynamic route parameter
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${crew}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // Handle fetch errors or non-existent crew
    notFound();
  }

  const data = await res.json();

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
              <td className="py-3 px-4 border-b border-gray-200">{data.name}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Email</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.email}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Website</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.website}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200 font-medium">City</td>
              <td className="py-3 px-4 border-b border-gray-200">{data.address.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
