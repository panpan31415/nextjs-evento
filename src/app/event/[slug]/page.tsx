import EventDetailSection from "@/components/event-detail-section";
import H1 from "@/components/event-header";
import { capitalize, fetchEventBySlug } from "@/lib/utils";
import { Metadata } from "next";
// import { sleep } from "@/lib/utils";
import Image from "next/image";

type EventPageProps = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
    const event = await fetchEventBySlug(params.slug);
    return {
        title: "Event - " + event.name,
        description: event.description,
    };
}

export default async function EventPage({ params }: EventPageProps) {
    // await sleep(2000);
    const event = await fetchEventBySlug(params.slug);

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
                        className='relative rounded-xl border-2 border-white/50 object-cover'
                    />
                    <div className='relative  flex flex-col h-[201px]'>
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
                        <button className='bg-white/20 text-lg w-[95vw] sm:w-full rounded-md border-2 border-white/10 py-2 mt-5 lg:mt-auto hover:scale-105 active:scale-[1.02] transition focus:scale-[1.02]'>
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
            <div className='min-h-[50vh] flex flex-col items-center px-5 py-16'>
                <EventDetailSection
                    title='About this event'
                    description={event.description}
                    className='mb-20'
                />
                <EventDetailSection
                    title='Location'
                    description={capitalize(event.location)}
                />
            </div>
        </main>
    );
}
