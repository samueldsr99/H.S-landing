import { addDays, addHours, addMinutes, addSeconds } from "date-fns";
import { describe, expect, it } from "vitest";

import { calculateTimeLeft } from "./useTimer";

describe("", () => {
  it("should return 0 when new Date() is now", () => {
    const now = new Date();
    const { days, hours, minutes, seconds } = calculateTimeLeft(now);
    expect([days, hours, minutes, seconds]).toEqual([0, 0, 0, 0]);
  });

  it("should return 0 when date is past", () => {
    const now = new Date();

    let pastDate = addDays(now, -7);
    pastDate = addHours(pastDate, -20);
    pastDate = addMinutes(pastDate, -38);

    const { days, hours, minutes, seconds } = calculateTimeLeft(pastDate);
    expect([days, hours, minutes, seconds]).toEqual([0, 0, 0, 0]);
  });

  it("should work properly on future dates", () => {
    const now = new Date();

    let futureDate = addDays(now, 7);
    futureDate = addHours(futureDate, 20);
    futureDate = addMinutes(futureDate, 38);

    const { days, hours, minutes, seconds } = calculateTimeLeft(futureDate);
    expect([days, hours, minutes, seconds]).toEqual([7, 20, 38, 0]);
  });

  it("should respect time conversions properly", () => {
    const now = new Date();

    let futureDate = addDays(now, 7);
    futureDate = addHours(futureDate, 28);
    futureDate = addMinutes(futureDate, 80);
    futureDate = addSeconds(futureDate, 90);

    const { days, hours, minutes, seconds } = calculateTimeLeft(futureDate);
    expect([days, hours, minutes, seconds]).toEqual([8, 5, 21, 30]);
  });
});
