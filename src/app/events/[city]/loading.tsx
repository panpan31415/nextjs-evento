import CardSkeleton from "@/components/card-skeleton";

export default function Loading() {
    return (
        <main className='flex h-full flex-wrap justify-center items-center px-[20px] py-5 gap-2 my-auto'>
            {Array.from({
                length: 6,
            }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </main>
    );
}
