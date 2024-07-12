import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-28T11:00:00") - +new Date();
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

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <span className="text-utd-navy font-bold" key={interval}>
          <span
            className="text-4xl md:text-2xl text-white font-extrabold"
            // style={{
            //   color: isScrolled ? "#a9de7c" : "#012741",
            //   transition: "color 0.5s ease",
            // }}
          >
            {timeLeft[interval]}
          </span>
          {interval}{" "}
        </span>
      );
    });
  }

  return (
    <div className="align-middle md:text-justify bg-utd-purple rounded-md p-2">
      <span className="text-utd-grey uppercase font-bold ">Countdown: </span>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Festival has started!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
