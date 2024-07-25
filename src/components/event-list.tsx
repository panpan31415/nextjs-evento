import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";
import { fetchEventByCity } from "@/lib/server-utils";

const EVENTS_API_URL = "https://bytegrad.com/course-assets/projects/evento/api/events";

type EventListProps = {
    city: string;
    page: number;
    size: number;
};
export default async function EventList({ city, page, size }: EventListProps) {
    const { events, total } = await fetchEventByCity({ city, page, size });
    const totalPage = Math.ceil(total / size);
    const prevLink = page > 1 ? `/events/${city}?page=${page - 1}&size=${size}` : "";
    const nextLink = page < totalPage ? `/events/${city}?page=${page + 1}&size=${size}` : "";

    return (
        <section className='flex flex-wrap gap-10 justify-center'>
            {events.map((event) => (
                <EventCard
                    event={event}
                    key={event.id}
                />
            ))}
            <PaginationControls
                prevLink={prevLink}
                nextLink={nextLink}
            />
        </section>
    );
}
