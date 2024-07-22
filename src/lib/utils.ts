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
