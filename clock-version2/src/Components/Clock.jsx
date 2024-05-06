import React, { useEffect, useState } from "react";
 // Import your stylesheet

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-container">
      <p className="clock">
        Current Time in Bangladesh: {time.toLocaleTimeString("en-US")} -{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}
