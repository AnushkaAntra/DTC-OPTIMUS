
import KrutrimMap from "@/components/custom/ola-krutrim";

export default function Home() {
    return(
        <>
        <div className="flex flex-row h-screen w-screen">
            <div className="h-full w-full">
                <KrutrimMap live={true} routes={false}/>
            </div>
        </div>
        </>
    );
}