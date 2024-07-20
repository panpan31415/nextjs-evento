"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

export default function SearchForm() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!searchText.trim()) {
            return;
        }
        router.push("/events/" + searchText);
    };
    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setSearchText(value);
    };

    return (
        <form
            onSubmit={onSubmit}
            className='w-full sm:w-[580px]'>
            <input
                value={searchText}
                onChange={onChange}
                className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none focus:ring-accent/50 
focus:ring-1 focus:bg-white/[10%] transition'
                type='text'
                placeholder='Search events in any city...'
                spellCheck={false}></input>
        </form>
    );
}
