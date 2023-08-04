import { useMemo } from "react";
import { format } from "date-fns";

import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";
import { DEFAULT_DATE_FORMAT } from "@/utils/dates";

import Countdown from "../Countdown/Countdown";

import Entry from "./Entry";

export interface StickyBarProps {}

const StickyBar: React.FC<StickyBarProps> = () => {
  const { data, isLoading } = useGetDataScienceApprenticeshipZeptolab();

  const startDate = useMemo(
    () =>
      data?.scholarship?.scholarshipStartDate &&
      format(new Date(data?.scholarship?.scholarshipStartDate), DEFAULT_DATE_FORMAT),
    [data?.scholarship?.scholarshipStartDate],
  );

  const applicationDeadline = useMemo(
    () =>
      data?.scholarship?.applicationEndDate &&
      format(new Date(data?.scholarship?.applicationEndDate), DEFAULT_DATE_FORMAT),
    [data?.scholarship?.applicationEndDate],
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="hidden bg-white lg:block fixed z-50 bottom-0 left-0 right-0 border-t border-[#DADADA]">
      <div className="container max-w-7xl mx-auto">
        <div className="shadow-sm px-2 pt-6 pb-4 flex justify-around">
          <Entry title={data?.scholarship.company.name} description={data?.scholarship.company.type} />
          <Entry title="Location" description={data?.scholarship.location.name} />
          <Entry title="Duration" description={`${data?.scholarship?.duration} Year Full-Time`} />
          <Entry title="Start date" description={startDate} />
          <Entry title="Application deadline" description={applicationDeadline} />
          {data?.scholarship?.applicationEndDate && (
            <Entry
              title="Application closes in"
              description={<Countdown targetDate={new Date(data?.scholarship?.applicationEndDate)} />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
