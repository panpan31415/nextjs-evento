import { cn } from "@/lib/utils";

type EventDetailSectionProps = {
    title: string;
    description: string;
    className?: string;
};
export default function EventDetailSection({ title, description, className = "" }: EventDetailSectionProps) {
    return (
        <section className={cn("flex flex-col items-center mb-10", className)}>
            <h2 className='text-2xl text-center mb-5'>{title}</h2>
            <p className='text-lg leading-8 text-white/75 text-center max-w-4xl'>{description}</p>
        </section>
    );
}
