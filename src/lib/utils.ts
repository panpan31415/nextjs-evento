import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...classNames: ClassValue[]) {
    return twMerge(clsx(classNames));
}

export function sleep(ms = 1000) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function fetchEventBySlug(slug: string) {
    const event = await prisma.event.findUnique({
        where: { slug },
    });
    if (!event) {
        return notFound();
    }
    return event;
}

type fetchEventByCityParams = {
    city: string;
    size: number;
    page: number;
};
export async function fetchEventByCity({ city, size = 6, page = 1 }: fetchEventByCityParams) {
    const events = await prisma.event.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
        take: size,
        skip: (page - 1) * size,
    });

    const total = await prisma.event.count({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
    });
    return { events, total };
}
