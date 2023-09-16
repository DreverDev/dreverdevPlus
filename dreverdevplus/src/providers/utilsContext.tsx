"use client";

import { UtilsContextType } from "@/types";
import { createContext, useEffect, useState } from "react";

const defaultContextValue: UtilsContextType = {
    isMobile: false,
};

export const UtilsContext = createContext<UtilsContextType>(defaultContextValue);


export const UtilsProvider = ({ children, }: { children: React.ReactNode }) => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <UtilsContext.Provider value={{ isMobile }}>
            {children}
        </UtilsContext.Provider>
    );
}