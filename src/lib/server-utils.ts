import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const fetchEventBySlug = unstable_cache(async (slug: string) => {
    const event = await prisma.event.findUnique({
        where: { slug },
    });
    if (!event) {
        return notFound();
    }
    return event;
});

type fetchEventByCityParams = {
    city: string;
    size: number;
    page: number;
};
export const fetchEventByCity = unstable_cache(async ({ city, size = 6, page = 1 }: fetchEventByCityParams) => {
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
});
