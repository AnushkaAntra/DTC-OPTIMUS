import {createBusData, getAllBus} from '@/lib/actions/bus.actions';
import {createRoute, getRoutes} from '@/lib/actions/route.actions';
import stopNameMap from './sdk/map-resources/stop-name-map';
import busRoutes from './sdk/map-resources/bus-routes';
 '@/sdk/map-resources/bus-routes';

import buslabels from "@/sdk/map-resources/bus-plate";


export async function populateBusRoutes() {
    busRoutes.map((route) => {
        const route_id = route.routeid;
        const starting_point = route.first_stop_id;
        const ending_point = route.last_stop_id;
        const route_name = stopNameMap[starting_point].stop_name + " to " + stopNameMap[ending_point].stop_name;
        const stops = route.stops;


        createRoute({route_id, starting_point, ending_point, route_name, stops});
    });
}

export async function populateOneBusRoute() {
    const route = busRoutes[0];
    const route_id = route.routeid;
    const starting_point = route.first_stop_id;
    const ending_point = route.last_stop_id;
    const route_name = stopNameMap[starting_point].stop_name + " to " + stopNameMap[ending_point].stop_name;
    const stops = route.stops;
    createRoute({route_id, starting_point, ending_point, route_name, stops});
}

export async function populateBus() {
    buslabels.map(async (bus) => {
        const licence_plate = bus;
        await createBusData({licence_plate});
    });

    const data = await getAllBus();
    console.log(data);
}
