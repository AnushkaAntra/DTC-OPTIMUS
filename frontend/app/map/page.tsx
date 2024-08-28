


// This is a temporary route to test the map integration, please ignore



import KrutrimMap from "@/components/custom/ola-krutrim";

export default function Home() {
    return(
        <>
        <div className="flex flex-row h-screen w-screen">
            <div className="h-full w-full">
                <KrutrimMap showlive={false} showstops={true} />
            </div>
        </div>
        </>
    );
}