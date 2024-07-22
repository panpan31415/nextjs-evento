import H1 from "@/components/event-header";
import EventList from "@/components/event-list";
import { Event } from "@/lib/types";
import { sleep } from "@/lib/utils";

type CityEventsPageProps = {
    params: {
        city: string;
    };
};
const EVENTS_API_URL = "https://bytegrad.com/course-assets/projects/evento/api/events";

export default async function CityEventsPage({ params }: CityEventsPageProps) {
    const { city } = params;
    let headerText = "";
    if (city.trim() === "all") {
        headerText = "All events";
    } else {
        headerText = "Events in " + city.charAt(0).toUpperCase() + city.slice(1);
    }
    await sleep(2000);
    const response = await fetch(`${EVENTS_API_URL}?city=${city}`);
    const events: Event[] = await response.json();
    return (
        <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
            <H1 className='mb-28'>{headerText}</H1>
            <EventList events={events} />
        </main>
    );
}
