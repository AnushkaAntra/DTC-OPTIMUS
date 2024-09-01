import KrutrimMap from '@/components/custom/ola-krutrim'
import ButtonModal from '@/components/ui/ButtonModal'
import RouteTable from '@/components/ui/RouteTable'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
        
        <div style={{ height: '300px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', top:'25px' }}>
            <KrutrimMap showroutes={true}/>
        </div>

        <section className="px-4 py-6">
          <ButtonModal />
          <RouteTable />
          
          <h1 className="text-red-500">This is a test message</h1>

        </section>
    
        </>
      )
}

export default page