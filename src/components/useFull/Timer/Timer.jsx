import React, { useState, useEffect } from 'react';
import { TbClockHour5 } from "react-icons/tb";

function Timer() {
    const [time, setTime] = useState(120);
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                const elapsed = Math.floor((Date.now() - startTime) / 1000);
                setTime(120 - elapsed);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [time]);





    const minutes = Math.floor(time / 60);
    const seconds = time % 60;




    return (
        <div style={{
            textAlign: "right",
            width: "100%",
            paddingRight: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px"
        }}>
            {time > 0 ? (
                <>
                    <TbClockHour5 size={24} />
                    <span style={{ color: time < 10 ? "var(--state-error-error)" : "var(--green-primary)", fontWeight: "600" }}>
                        {
                            parseInt(minutes.toString().padStart(2, '0')).toLocaleString("fa-IR")
                        }
                        :
                        {
                            parseInt(seconds.toString().padStart(2, '0')).toLocaleString("fa-IR")
                        }
                    </span>
                    <span>تا دریافت مجدد کد تائید</span>
                </>
            ) : (
                <span>دریافت مجدد کد</span>
            )}
        </div>
    );
}

export default Timer;
