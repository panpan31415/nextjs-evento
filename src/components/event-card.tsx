import { Event } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
    event: Event;
};
export default function EventCard({ event }: EventCardProps) {
    const eventDate = new Date(event.date);
    return (
        <Link
            href={`/event/${event.slug}`}
            className='flex-1 h-[380px] basis-80 max-w-[500px]'>
            <section className=' bg-white/[3%] w-full h-full  rounded-xl overflow-hidden flex flex-col hover:scale-105 active:scale-[1.02]   transition-transform relative'>
                <Image
                    src={event.imageUrl}
                    alt={event.name}
                    width={500}
                    height={280}
                    className='h-[60%] object-fill'
                />
                <div className='flex flex-col flex-1 justify-center items-center'>
                    <h2 className='text-2xl font-semibold '>{event.name}</h2>
                    <p className='italic text-white/75'>By {event.organizerName}</p>
                    <p className='text-sm text-white/50 mt-4'>{event.location}</p>
                </div>

                <section className='absolute left-[12px] top-[12px] h-[45px] aspect-square  bg-black/30 rounded-md flex justify-center items-center flex-col'>
                    <p className='text-xl font-bold -mb-[5px]'>
                        {eventDate.toLocaleDateString("en-US", {
                            day: "2-digit",
                        })}
                    </p>
                    <p className='text-xs text-accent uppercase'>
                        {eventDate.toLocaleDateString("en-US", {
                            month: "short",
                        })}
                    </p>
                </section>
            </section>
        </Link>
    );
}
