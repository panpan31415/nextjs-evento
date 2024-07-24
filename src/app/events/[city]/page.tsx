import H1 from "@/components/event-header";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { notFound } from "next/navigation";

type CityEventsPageProps = {
    params: {
        city: string;
    };
    searchParams: {
        page: number;
        size: number;
    };
};

export function generateMetadata({ params }: CityEventsPageProps): Metadata {
    return {
        title: params.city === "all" ? "All events" : "Event in " + capitalize(params.city),
    };
}
export default function CityEventsPage({ params, searchParams }: CityEventsPageProps) {
    const { city } = params;
    let page = Number(searchParams.page);
    let size = 6;
    if (isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1) {
        return notFound();
    }
    if (isNaN(Number(searchParams.size)) || Number(searchParams.size) < 6) {
        return notFound();
    }

    let headerText = "";
    if (city.trim() === "all") {
        headerText = "All events";
    } else {
        headerText = "Events in " + capitalize(city);
    }

    return (
        <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
            <H1 className='mb-28'>{headerText}</H1>
            <Suspense
                key={`${page}+${size}`}
                fallback={<Loading />}>
                <EventList
                    city={city}
                    page={page}
                    size={size}
                />
            </Suspense>
        </main>
    );
}
