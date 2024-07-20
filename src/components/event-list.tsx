import { Event } from "@/lib/types";
import EventCard from "./event-card";

type EventListProps = {
    events: Event[];
};
export default function EventList({ events }: EventListProps) {
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
