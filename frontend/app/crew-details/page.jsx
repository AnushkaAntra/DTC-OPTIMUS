import Link from 'next/link';

export default async function CrewDetails() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const crews = await res.json();

  return (
    <div className='bg-primary'>
      <h1>Crew Details</h1>
      <div className=''>
        {crews.map(crew => (
          <Link href={'/crew-details/' + crew.id} key={crew.id}>
            <div className="mx-20 my-10 px-2 py-4 bg-primary block border-l-8 border-secondary">
              <h3>{crew.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
