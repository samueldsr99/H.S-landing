import clsx from "classnames";

import useTimer from "@/hooks/useTimer";

export interface CountdownProps {
  className?: string;
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ className, targetDate }) => {
  const { days, hours, minutes, seconds } = useTimer(targetDate);

  return (
    <div className={clsx("space-x-1", className)}>
      <span>{days} Days</span>
      <span>:</span>
      <span>{hours} Hrs</span>
      <span>:</span>
      <span>{minutes} Min</span>
      <span>:</span>
      <span>{seconds} Sec</span>
    </div>
  );
};

export default Countdown;
