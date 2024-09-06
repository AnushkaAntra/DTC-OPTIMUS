import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import {NextResponse} from "next/server";

export async function GET(req, res) {
    const response = await fetch(`https://otd.delhi.gov.in/api/realtime/VehiclePositions.pb?key=HYvzJFDQXi0cPtXqGUgmSdws9sJsz329`);
    const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
        new Uint8Array(buffer)
      );

    const commonRoutes = new Map();

    feed.entity.forEach((entity) => {
        if (entity.vehicle) {
            const routeId = entity.vehicle.trip.routeId;
            if (commonRoutes.has(routeId)) {
                commonRoutes.get(routeId).push(entity.vehicle);
            } else {
                commonRoutes.set(routeId, new Array(entity.vehicle));
            }
        }
    });

    const commonRoutesJson = JSON.stringify([...commonRoutes.entries()]);

    const headers = new Headers();
    headers.set('Cache-Control', 'no-store');

    return new NextResponse(commonRoutesJson, Headers);
}