"use client";

import { useEffect, useState } from "react";

export default function ColorText() {
    const words = [{ word: "innovative", color: "violet" }, { word: "expandable", color: "green" }, { word: "up-to-date", color: "amber" }, { word: "modernized", color: "red" }];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <h3 className="text-4xl md:text-8xl">
            <span>I build&nbsp;</span>
            <span id="blindText" className={`transition-colors whitespace-pre ${words[currentIndex].color}`}>{words[currentIndex].word}</span>
            <span className="block"> web applications.</span>
        </h3>
    )
}