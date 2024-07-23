import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

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
    return event;
}

export async function fetchEventByCity(city: string) {
    const events = await prisma.event.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
    });
    return events;
}
