"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Button } from "@nextui-org/react";
import stopNameMap from "@/sdk/map-resources/stop-name-map";
import busRoutes from "@/sdk/map-resources/bus-routes";


const { driver_name, ph_no, license_no } = {"_id":{"$oid":"66d3eb19d13e58852ff38dac"},"driver_name":"Zoe Wright","ph_no":{"$numberLong":"2955222357"},"address":"20 Test Address St","license_no":"0B8JZQ10VF","status":"available"};

const staticRoutes = []
for(var i = 5; i <= 25; i++) {
  // console([stopNameMap[busRoutes[i].first_stop_id].stop_name, stopNameMap[busRoutes[i].last_stop_id].stop_name])
  const from = stopNameMap[busRoutes[i].first_stop_id].stop_name;
  const to = stopNameMap[busRoutes[i].last_stop_id].stop_name;
  



  if (to && from) {
    staticRoutes.push({"id": i, "from": from, "to": to});
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
        <TableColumn key="from">From</TableColumn>
        <TableColumn key="to">To</TableColumn>
        <TableColumn key="id">Directions</TableColumn>
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
            <TableCell>{item.from}</TableCell>
            <TableCell>{item.to}</TableCell>
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
