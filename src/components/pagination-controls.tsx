import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const pgBtnStyles =
    "text-white px-5 py-3 bg-white/5 flex items-center gap-5 opacity-75 rounded-md hover:opacity-100 transition text-sm ";

type PaginationControlsProps = {
    prevLink: string;
    nextLink: string;
};

export default function PaginationControls({ prevLink = "", nextLink = "" }: PaginationControlsProps) {
    return (
        <section className='w-full flex justify-between'>
            <Link
                aria-disabled={!prevLink}
                href={prevLink}
                className={cn(pgBtnStyles, !prevLink ? "opacity-10 cursor-not-allowed" : "")}>
                <ArrowLeftIcon />
                Previous
            </Link>
            <Link
                aria-disabled={!nextLink}
                href={nextLink}
                className={cn(pgBtnStyles, !nextLink ? "opacity-10 cursor-not-allowed" : "")}>
                Next
                <ArrowRightIcon />
            </Link>
        </section>
    );
}
