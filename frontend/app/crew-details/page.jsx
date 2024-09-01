import { getDriverByAvailability, getDriverByNotAvailability } from '@/lib/actions/driver.actions';
import Link from 'next/link';

export default async function CrewDetails() {
  // Fetch available and not-available drivers data from the API
  const available = await getDriverByAvailability();
  const notAvailable = await getDriverByNotAvailability();
  
  return (
    <div className='bg-primary min-h-screen py-8 px-4 text-black'>
      <h1 className='text-4xl font-bold text-center text-secondary mb-6'>Crew Details</h1>
      
      <div className='space-y-8'>
        {/* Available Crews */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <h2 className='text-xl font-semibold text-secondary bg-primary py-3 px-4'>Available Crews</h2>
          <div className='h-80 overflow-y-auto'>
            {available.status = 'available' ? (
              available.map(driver => (
                <Link href={'/crew-details/' + driver._id} key={driver._id}>
                  <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                    <h3 className='text-lg font-medium text-tertiary'>{driver.driver_name}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className='text-center py-4'>No available crews</p>
            )}
          </div>
        </div>
        
        {/* Not Available Crews */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <h2 className='text-xl font-semibold text-secondary bg-primary py-3 px-4'>Not Available Crews</h2>
          <div className='h-96 overflow-y-auto'>
            {notAvailable.status != 'available' ? (
              notAvailable.map(driver => (
                <Link href={'/crew-details/' + driver._id} key={driver._id}>
                  <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
                    <h3 className='text-lg font-medium text-tertiary'>{driver.driver_name}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className='text-center py-4'>No not available crews</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
