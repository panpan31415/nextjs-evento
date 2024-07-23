import { Event } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

const EVENTS_API_URL = "https://bytegrad.com/course-assets/projects/evento/api/events";

export async function fetchEventBySlug(slug: string) {
    const response = await fetch(EVENTS_API_URL + "/" + slug);
    const event: Event = await response.json();
    return event;
}

export async function fetchEventByCity(city: string) {
    const response = await fetch(`${EVENTS_API_URL}?city=${city}`);
    const events: Event[] = await response.json();
    return events;
}
