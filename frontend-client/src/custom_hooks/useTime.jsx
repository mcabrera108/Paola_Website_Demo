import { useState, useEffect } from "react"

function useTime() {
    const locale = "en";
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            console.log("Setting Time");
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    const formattedTime = time.toLocaleTimeString(locale, { hour: "2-digit", hour12: true, minute: "2-digit" });
    return {
        formattedTime
    }
}
export default useTime;