"use client";

import H1 from "@/components/event-header";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
    return (
        <main className='mb-5 py-24 flex justify-center items-center flex-col'>
            <H1>{error.message}</H1>
            <button
                className='py-5 px-10 bg-white/10 mt-20 rounded-md hover:bg-white/50 '
                onClick={reset}>
                try again
            </button>
        </main>
    );
}
