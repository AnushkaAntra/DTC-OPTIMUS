"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Button } from "@nextui-org/react";
import stopNameMap from "@/sdk/map-resources/stop-name-map";
import busRoutes from "@/sdk/map-resources/bus-routes";

 
const dummyData = [
    {
        driver_name: "John Doe",
        ph_no: "1234567890",
        license_no: "ABC123",
        status: "Available",
    },
    {
        driver_name: "Jane Smith",
        ph_no: "0987654321",
        license_no: "XYZ789",
        status: "Unavailable",
    },
    {
        driver_name: "Alice Johnson",
        ph_no: "9876543210",
        license_no: "DEF456",
        status: "Available",
    },
    {
        driver_name: "Bob Williams",
        ph_no: "0123456789",
        license_no: "GHI789",
        status: "Unavailable",
    },
    {
        driver_name: "Charlie Brown",
        ph_no: "6543210987",
        license_no: "JKL012",
        status: "Available",
    },
    {
        driver_name: "Diana Prince",
        ph_no: "3216549870",
        license_no: "MNO345",
        status: "Unavailable",
    },
    {
        driver_name: "Eve Adams",
        ph_no: "7890123456",
        license_no: "PQR678",
        status: "Available",
    },
    {
        driver_name: "Frank Miller",
        ph_no: "5678901234",
        license_no: "STU901",
        status: "Unavailable",
    },
    {
        driver_name: "Grace Lee",
        ph_no: "4321098765",
        license_no: "VWX234",
        status: "Available",
    },
    {
        driver_name: "Hank Green",
        ph_no: "8765432109",
        license_no: "YZA567",
        status: "Unavailable",
    },
    {
        driver_name: "Ivy White",
        ph_no: "3456789012",
        license_no: "BCD890",
        status: "Available",
    },
    {
        driver_name: "Jack Black",
        ph_no: "2109876543",
        license_no: "EFG123",
        status: "Unavailable",
    },
    {
        driver_name: "Kara Zor-El",
        ph_no: "1098765432",
        license_no: "HIJ456",
        status: "Available",
    },
    {
        driver_name: "Liam Neeson",
        ph_no: "9087654321",
        license_no: "KLM789",
        status: "Unavailable",
    },
    {
        driver_name: "Mia Wong",
        ph_no: "8901234567",
        license_no: "NOP012",
        status: "Available",
    },
    {
        driver_name: "Nina Simone",
        ph_no: "6789012345",
        license_no: "QRS345",
        status: "Unavailable",
    },
    {
        driver_name: "Oscar Isaac",
        ph_no: "5678901234",
        license_no: "TUV678",
        status: "Available",
    },
    {
        driver_name: "Paul Allen",
        ph_no: "2345678901",
        license_no: "WXY901",
        status: "Unavailable",
    },
    {
        driver_name: "Quinn Harper",
        ph_no: "3456789012",
        license_no: "ZAB234",
        status: "Available",
    },
    {
        driver_name: "Rachel Adams",
        ph_no: "4567890123",
        license_no: "CDE567",
        status: "Unavailable",
    },
];

const staticRoutes = [];

for(var i = 5; i < 25; i++) {
  // console([stopNameMap[busRoutes[i].first_stop_id].stop_name, stopNameMap[busRoutes[i].last_stop_id].stop_name])
  const from = stopNameMap[busRoutes[i].first_stop_id].stop_name;
  const to = stopNameMap[busRoutes[i].last_stop_id].stop_name;
  const d_name = dummyData[i - 5].driver_name;
  const stat = dummyData[i - 5].status;
  const route = from + " to " + to;


  if (to && from && d_name && stat && route) {
    staticRoutes.push({"id": i, "bus_no": i, "driver_name": d_name, "status": stat, "route": route});
  }
}

// console.log(staticRoutes);

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  const loadMore = () => {
    // Implement your logic for loading more data here
  };

  const hasMore = true; // Set this to true if you have more data to load

  const [isSaving, setIsSaving] = React.useState(false);

  const saveKey = (id) => {
    setIsSaving(true);
    localStorage.setItem('tempRouteIdStorage', id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button isDisabled={isLoading} variant="flat" onPress={loadMore}>
              {isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        <TableColumn key="bus_no">Bus No.</TableColumn>
        <TableColumn key="driver_name">Driver</TableColumn>
        <TableColumn key="route">Route</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="view">View</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={staticRoutes.map((route, index) => ({
          ...route,
          key: route.id || index,
        }))}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.key}>
            <TableCell>{item.bus_no}</TableCell>
            <TableCell>{item.driver_name}</TableCell>
            <TableCell>{item.route}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <Button onClick={() => saveKey(item.id)} isDisabled={isSaving}>
                {item.id === isSaving ? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "View"
                )}
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
