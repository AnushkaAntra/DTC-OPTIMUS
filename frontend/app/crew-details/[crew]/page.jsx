export default async function CrewDetails({ params }) {
  const { crew } = params;

  // Fetch data using the dynamic route parameter
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${crew}`);
  
  if (!res.ok) {
    // Return an error message if the fetch request fails
    return <div>Failed to load data</div>;
  }

  const data = await res.json();

  return (
    <div className="h-screen bg-primary">
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.website}</p>
      <p>{data.address.city}</p>
    </div>
  );
}
