import Skeleton from "@/components/skeleton";

export default function Loading() {
    return (
        <div className='flex flex-col min-h-[50vh] w-[50%] mx-auto items-start justify-center gap-y-4 '>
            <Skeleton className='w-[80%] h-20 mt-10' />
            <Skeleton className='w-[60%] h-4' />
            <Skeleton className='w-[80%] h-20' />
            <Skeleton className='w-[60%] h-4' />
            <Skeleton className='w-[80%] h-20' />
            <Skeleton className='w-[60%] h-4' />
        </div>
    );
}
