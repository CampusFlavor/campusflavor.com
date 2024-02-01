import { createContext, useEffect, useState } from "react";

function useScroll() {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setData((last) => {
                return {
                    x: window.scrollX,
                    y: window.scrollY,
                    lastX: last.x,
                    lastY: last.y,
                };
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return data;
}

const ScrollContext = createContext(null);

export { useScroll, ScrollContext };