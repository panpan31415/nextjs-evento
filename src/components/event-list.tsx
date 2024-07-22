import { Event } from "@/lib/types";
import EventCard from "./event-card";
// import { sleep } from "@/lib/utils";

const EVENTS_API_URL = "https://bytegrad.com/course-assets/projects/evento/api/events";

type EventListProps = {
    city: string;
};
export default async function EventList({ city }: EventListProps) {
    // await sleep(2000);
    const response = await fetch(`${EVENTS_API_URL}?city=${city}`);
    const events: Event[] = await response.json();
    return (
        <section className='flex flex-wrap gap-10 justify-center'>
            {events.map((event) => (
                <EventCard
                    event={event}
                    key={event.id}
                />
            ))}
        </section>
    );
}
