import { useEffect, useState } from "react";

export const GoodDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toString());
  const [timeOfDay, setTimeOfDay] = useState("...");

  useEffect(() => {
    const newDate = () => {
      const now = new Date();
      setCurrentDate(now.toString());

      const hours = now.getHours();

      if (hours >= 6 && hours < 12) {
        setTimeOfDay("Morning");
      } else if (hours >= 12 && hours < 20) {
        setTimeOfDay("Afternoon");
      } else {
        setTimeOfDay("Nigth");
      }
    };
    setInterval(newDate, 1000);

    return () => {
      clearInterval(newDate);
    };
  }, []);

  return (
    <>
      <h1>Good {timeOfDay}</h1>
      <h4>Your current Date: {currentDate}</h4>
    </>
  );
};

