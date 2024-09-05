export function crewBinding(
  drivers: any,
  conductors: any,
  rooster: any,
  routes: any
) {
  const schedule = Object.entries(rooster.data).map(([key, value]) => {
    return [key, value];
  });

  console.log(conductors[0]._id);
  let crew = [];

  // todo : update crew dynamically
  for (let i = 0; i < 10; i++) {
    crew.push({
      driver: drivers[i]._id,
      conductor: conductors[i]._id,
      route_id: routes,
      rooster_id: rooster._id,
      rooster_bus_id: schedule[0],
      schedule: schedule[1],
      status: "available",
    });
  }

  return crew;
}

export function countBuses(schedule: any) {
  // assuming at each 30 min i need a new bus
  let buses = 0;
  for (let i = 0; i < schedule.length; i++) {
    for (let ele of schedule[i]) {
      if (ele === 1) {
        buses++;
      }
    }
  }
  return buses;
}

export function mapBuses(routes: any, buses: any) {
  // assume 30 routes
  /*
    route 1 - 5:00 - 5:30, 
  */
}
