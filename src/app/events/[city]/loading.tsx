import CardSkeleton from "@/components/card-skeleton";

export default function Loading() {
    return (
        <div className='w-full flex flex-wrap gap-5 justify-center'>
            {Array.from({
                length: 6,
            }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}
