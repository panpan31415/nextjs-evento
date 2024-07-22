import H1 from "@/components/event-header";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";

type CityEventsPageProps = {
    params: {
        city: string;
    };
};

export default function CityEventsPage({ params }: CityEventsPageProps) {
    const { city } = params;
    let headerText = "";
    if (city.trim() === "all") {
        headerText = "All events";
    } else {
        headerText = "Events in " + city.charAt(0).toUpperCase() + city.slice(1);
    }

    return (
        <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
            <H1 className='mb-28'>{headerText}</H1>
            <Suspense fallback={<Loading />}>
                <EventList city={city} />
            </Suspense>
        </main>
    );
}
