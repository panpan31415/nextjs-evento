import Skeleton from "./skeleton";

export default function CardSkeleton() {
    return (
        <div className=' flex flex-col h-[380px] basis-80 max-w-[500px] gap-5'>
            <Skeleton className='h-[100px]  w-full rounded-xl' />
            <Skeleton className='h-5 w-full' />
            <Skeleton className='h-5  w-full' />
            <Skeleton className='h-5  w-full' />
        </div>
    );
}
