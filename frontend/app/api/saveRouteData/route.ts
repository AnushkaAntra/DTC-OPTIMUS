import Route from "@/database/models/route.model";
import { connectToDatabase } from "@/database/mongoose";
import {getRoutes, deleteRouteById, deleteAllRoutes, getRouteById} from "@/lib/actions/route.actions";
import { NextResponse } from "next/server";
import {populateOneBusRoute, populateBusRoutes, populateBus} from "@/populate.temp";
import {getAllCrews} from "@/lib/actions/crew.actions";

import {getAllBus} from "@/lib/actions/bus.actions";



export const GET = async (req: Request, res: Response) => {
  try {
    // await connectToDatabase();
    // const routeData = populateOneBusRoute();
    // await deleteRouteById("1");

    // await ();

    
    const data = await getAllCrews();
    const tempId = data[1].route_id[0];

    const temp = await getRouteById(tempId)
    console.log(temp);
  }
  catch(error){
    console.error(error);
  }
  return new NextResponse(
    "hi"
  );
};
