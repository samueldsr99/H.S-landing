import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;

export const calculateTimeLeft = (targetDate: Date): Timer => {
  const timeLeftInSeconds = differenceInSeconds(targetDate, new Date());

  const days = Math.floor(timeLeftInSeconds / SECONDS_PER_DAY);
  const remainingHours = Math.floor((timeLeftInSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR);
  const remainingMinutes = Math.floor((timeLeftInSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
  const remainingSeconds = timeLeftInSeconds % SECONDS_PER_MINUTE;

  return {
    days: Math.max(days, 0),
    hours: Math.max(remainingHours, 0),
    minutes: Math.max(remainingMinutes, 0),
    seconds: Math.max(remainingSeconds, 0),
  };
};

const useTimer = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<Timer>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return timeLeft;
};

export default useTimer;
