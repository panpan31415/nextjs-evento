import H1 from "@/components/event-header";
import { Event } from "@/lib/types";
import Image from "next/image";

type EventPageProps = {
    params: {
        slug: string;
    };
};
const EVENTS_API_URL = "https://bytegrad.com/course-assets/projects/evento/api/events";

export default async function EventPage({ params }: EventPageProps) {
    const response = await fetch(EVENTS_API_URL + "/" + params.slug);
    const event: Event = await response.json();
    return (
        <main>
            <section className='relative  overflow-hidden flex justify-center items-center p-16'>
                <Image
                    src={event.imageUrl}
                    alt={"Event background image"}
                    fill
                    sizes='(max-width: 1280px) 100vw, 1280px'
                    quality={50}
                    className='object-cover blur-3xl'
                />
                <div className='flex flex-col lg:flex-row justify-center items-center gap-x-6 gap-y-5 lg:gap-y-0 lg:gap-x-16'>
                    <Image
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={201}
                        className='relative rounded-xl bottom-2 border-white/50 object-cover'
                    />
                    <div className='relative  flex flex-col'>
                        <p className=' text-white/75'>
                            {new Date(event.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <H1 className='mb-2 mt-1 whitespace-nowrap lg:text-5xl'>{event.name}</H1>
                        <p className='whitespace-nowrap text-xl text-white/75'>
                            Organized by <span className='italic'>{event.organizerName}</span>
                        </p>
                        <button className='bg-white/20 text-lg w-[95vw] sm:w-full rounded-md border-2 border-white/10 py-2 mt-5 hover:scale-105 active:scale-[1.02] transition focus:scale-[1.02]'>
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
            <div></div>
        </main>
    );
}
