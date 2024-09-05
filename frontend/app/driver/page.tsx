import {KrutrimMap} from '@/components/custom/ola-krutrim'
import BusTable from '@/components/ui/BusTable'
import ButtonModal from '@/components/ui/ButtonModal'
import RouteTable from '@/components/ui/RouteTable'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>  
        <div style={{ height: '520px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', top:'25px' }}>
            <KrutrimMap showroutes={true}/>
        </div>
        <section className="px-4 py-6">
          <ButtonModal text={"Buses"}/>
          <BusTable />

        </section>
    
        </>
      )
}

export default page