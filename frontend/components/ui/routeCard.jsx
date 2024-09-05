import React from 'react';
import FormattedRoutes from '@/sdk/map-resources/formatted-route-stop';
import stopNameMap from '@/sdk/map-resources/stop-name-map';

// type Props = {}

// interface liveData {
//   key: any;
//   data: any;
// }

const RouteCard = (props) => {
  // console.log(props.index);

  const routeId = props.data[0];
  const first_stop = FormattedRoutes[routeId] && stopNameMap[FormattedRoutes[routeId].first_stop_id].stop_name;
  const last_stop = FormattedRoutes[routeId] && stopNameMap[FormattedRoutes[routeId].last_stop_id].stop_name;
  
  if(!(first_stop && last_stop))
    return(<></>);
  
  // console.log(props);

  const startDate = formatDate(props.data[1][0].trip.startDate);

  // const handleClick = () => {
  //   const savedIndexes = JSON.parse(localStorage.getItem('savedIndexes')) || [];
  //   if (!savedIndexes.includes(props.index)) {
  //     savedIndexes.push(props.index);
  //     localStorage.setItem('savedIndexes', JSON.stringify(savedIndexes));
  //   }
  // };

  const handleClick = () => {
    localStorage.setItem('currentRouteId', JSON.stringify({index: props.index, vehicleData: props.data}));
  };

  return (
    <div className={`mx-4 rounded-l-md rounded-r-lg ${props.highlight == props.index ? 'bg-[#779FE5]' : 'bg-inherit'}`}>
      <div className="h-32 ml-2 my-6 bg-gray-50 rounded-l-none rounded-r-lg cursor-pointer" onClick={handleClick} >
        {/* <div className="h-32 w-2 border" /> */}
      <div className="flex flex-row justify-between">
        <h2 className="font-inter font-bold mx-4 py-2 text-lg">Route {props.data[0]}</h2>
        <div className="flex justify-center items-center w-16 bg-[#779FE5] rounded-lg mx-4 my-2">
            <h3 className="font-inter text-center text-gray-50">Bus {props.data[1].length}</h3>
        </div>
      </div>
      <div className="mx-6">
        <p className="text-sm">{startDate} • {first_stop}</p>
      </div>
      <div className="mx-[4.7rem]">
          <p className='font-bold'>|</p>
      </div>
      <div className="mx-6">
        <p className="text-sm">{startDate} • {last_stop}</p>
      </div>

    </div>
  </div>
  )
}

const formatDate = (dateString) => {
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6) - 1;
  const day = dateString.slice(6, 8);

  const date = new Date(year, month, day);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });

  return formattedDate;
};

function setCurrentRouteId(index) {
  localStorage.setItem("currentRouteId", index);
}

export default RouteCard;