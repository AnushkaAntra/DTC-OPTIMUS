import KrutrimMap from '@/components/custom/ola-krutrim'
import React from 'react'

type Props = {}

const page = (props: Props) => {
return (
    <div className="h-screen w-full flex justify-center items-center top-25">
        <KrutrimMap showroutes={false} />
    </div>
)
}

export default page