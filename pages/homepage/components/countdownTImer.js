import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-13T12:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d:
          Math.floor(difference / (1000 * 60 * 60 * 24)) != 0
            ? Math.floor(difference / (1000 * 60 * 60 * 24))
            : "0",
        h:
          Math.floor((difference / (1000 * 60 * 60)) % 24) != 0
            ? Math.floor((difference / (1000 * 60 * 60)) % 24)
            : "0",
        m: Math.floor((difference / 1000 / 60) % 60),

        // s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  if (timeLeft) {
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span className="text-white" key={interval}>
          <span className="text-4xl md:text-xl text-utd-green md:text-utd-blue font-extrabold">
            {timeLeft[interval]}
          </span>
          {interval}{" "}
        </span>
      );
    });
  }

  return (
    <div className="mt-0.5 align-middle md:text-justify md:w-64 w-96 ">
      <span className="text-white uppercase">Tickets on sale: </span>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Festival has started!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
