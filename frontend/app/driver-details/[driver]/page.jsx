import { getDriverById } from '@/lib/actions/driver.actions';
import { notFound } from 'next/navigation';
import KrutrimMap from '@/components/custom/ola-krutrim';

export default async function CrewDetails({ params }) {
  console.log(params);

//   if (!data) {
//     // Handle fetch errors or non-existent crew
//     notFound();
//   }

  return (
    <div className="h-screen w-full">
        <KrutrimMap showRouteId={"1"} mapStyle={"https://api.olamaps.io/tiles/vector/v1/styles/default-dark-lite/style.json"}/>
    </div>
  );
}
