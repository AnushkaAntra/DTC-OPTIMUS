import Link from 'next/link';

export default async function CrewDetails() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const crews = await res.json();

  return (
    <div className='bg-primary min-h-screen py-8 px-4'>
      <h1 className='text-4xl font-bold text-center text-secondary mb-6'>Crew Details</h1>
      
      <div className='space-y-8'>
        {/* Available Crews */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <h2 className='text-xl font-semibold text-secondary bg-primary py-3 px-4'>Available Crews</h2>
          <div className='h-80 overflow-y-auto'>
            {crews.map(crew => (
              <Link href={'/crew-details/' + crew.id} key={crew.id}>
                <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                  <h3 className='text-lg font-medium text-tertiary'>{crew.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Not Available Crews */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <h2 className='text-xl font-semibold text-secondary bg-primary py-3 px-4'>Not Available Crews</h2>
          <div className='h-96 overflow-y-auto'>
            {crews.map(crew => (
              <Link href={'/crew-details/' + crew.id} key={crew.id}>
                <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                  <h3 className='text-lg font-medium text-tertiary'>{crew.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
