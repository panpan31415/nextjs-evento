import SearchForm from "@/components/searchForm";
import Link from "next/link";

export default function Home() {
    return (
        <main className='flex flex-col items-center pt-36 px-3'>
            <h1 className='text-3xl font-bold tracking-tight lg:text-6xl'>Find events around you</h1>
            <p className='mb-12 mt-7 text-2xl lg:3xl opacity-75'>
                Browse more than <span className='font-bold italic underline text-accent'>10,000</span> events around
                you
            </p>
            <SearchForm />
            <section className='mt-6 flex gap-x-4 text-white/50'>
                <p>Popular:</p>
                <div className='space-x-2 font-semibold'>
                    <Link href={"/events/austin"}>Austin</Link>
                    <Link href={"/events/seattle"}>Seattle</Link>
                </div>
            </section>
        </main>
    );
}
