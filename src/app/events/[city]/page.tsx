import H1 from "@/components/event-header";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type CityEventsPageProps = {
    params: {
        city: string;
    };
    searchParams: {
        page: number;
        size: number;
    };
};

const pageSchema = z.coerce.number().int().positive().optional();
const sizeSchema = z.coerce.number().int().positive().optional();

export function generateMetadata({ params }: CityEventsPageProps): Metadata {
    return {
        title: params.city === "all" ? "All events" : "Event in " + capitalize(params.city),
    };
}
export default function CityEventsPage({ params, searchParams }: CityEventsPageProps) {
    const { city } = params;

    let parsedPage = pageSchema.safeParse(searchParams.page);
    let parseSize = sizeSchema.safeParse(searchParams.size);

    if (!parsedPage.success) {
        throw new Error("Invalid Page number");
    }
    if (!parseSize.success) {
        throw new Error("Invalid size number");
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
                key={`${parsedPage.data}+${parseSize.data}`}
                fallback={<Loading />}>
                <EventList
                    city={city}
                    page={parsedPage.data || 1}
                    size={parseSize.data || 6}
                />
            </Suspense>
        </main>
    );
}
