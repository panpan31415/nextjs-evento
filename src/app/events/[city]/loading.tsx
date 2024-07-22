import CardSkeleton from "@/components/card-skeleton";

export default function Loading() {
    return (
        <div className='flex h-full flex-wrap justify-center items-center px-[20px] py-5 gap-10 my-auto'>
            {Array.from({
                length: 6,
            }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}
