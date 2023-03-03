import React, { useEffect, useState } from 'react';

export default function Timer({ duration }) {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const formatTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let total_days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);
        let days = parseInt(total_days);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;

    };

    return (
        <>{formatTime(time)} </>           
    );
}