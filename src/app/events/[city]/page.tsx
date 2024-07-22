import H1 from "@/components/event-header";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type CityEventsPageProps = {
    params: {
        city: string;
    };
};

export function generateMetadata({ params }: CityEventsPageProps): Metadata {
    return {
        title: params.city === "all" ? "All events" : "Event in " + capitalize(params.city),
    };
}
export default function CityEventsPage({ params }: CityEventsPageProps) {
    const { city } = params;
    let headerText = "";
    if (city.trim() === "all") {
        headerText = "All events";
    } else {
        headerText = "Events in " + capitalize(city);
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
