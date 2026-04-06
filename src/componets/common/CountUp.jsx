import { useEffect, useState } from "react";

const CountUp = ({ targetAmount, duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = targetAmount / (duration / 20);
        const timer = setInterval(() => {
            start += increment;
            if (start >= targetAmount) {
                start = targetAmount;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 20);

        return () => clearInterval(timer);
    }, [targetAmount, duration]);

    return <span>{count}</span>;
};

export default CountUp;
