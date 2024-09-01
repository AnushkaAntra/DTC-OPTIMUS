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
