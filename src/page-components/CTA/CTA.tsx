import { useMemo } from "react";
import clsx from "classnames";
import { format } from "date-fns";

import Button from "@/components/atoms/Button";
import Card from "@/components/Card";
import { CardEntry } from "@/components/Card/Card";
import Countdown from "@/components/Countdown/Countdown";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";
import { DEFAULT_DATE_FORMAT } from "@/utils/dates";

import "./CTA.styles.css";

interface MovingContainerProps {
  className?: string;
  title: string;
  description: string;
  position: string;
}

const MovingContainer: React.FC<MovingContainerProps> = ({ className, title, description, position }) => {
  return (
    <div className={clsx("space-y-10", className)}>
      <h3 className="text-xl font-medium leading-8 order-9">{title}</h3>
      <p className="text-xl font-light leading-8 order-10">{description}</p>
      <p>
        <strong>Position: </strong>
        {position}
      </p>
    </div>
  );
};

const CTA: React.FC = () => {
  const { data, isLoading } = useGetDataScienceApprenticeshipZeptolab();

  const startDate = useMemo(
    () =>
      data?.scholarship?.scholarshipStartDate &&
      format(new Date(data?.scholarship?.scholarshipStartDate), DEFAULT_DATE_FORMAT),
    [data?.scholarship?.scholarshipStartDate],
  );

  const endDate = useMemo(
    () =>
      data?.scholarship?.applicationEndDate &&
      format(new Date(data?.scholarship?.applicationEndDate), DEFAULT_DATE_FORMAT),
    [data?.scholarship?.applicationEndDate],
  );

  return !isLoading ? (
    <section className="mt-24 md:mt-40" id="cta">
      <div className="container max-w-6xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-x-20 gap-y-6">
          <div className="w-full relative md:w-1/2 space-y-10">
            <h1 className="text-primary text-5xl font-medium leading-[56px]">{data?.scholarship?.name}</h1>
            <MovingContainer
              className="hidden md:block"
              title="A fully funded work-study program to launch your tech career"
              description={data?.scholarship?.description?.[0]?.data ?? ""}
              position={data?.scholarship?.program?.name ?? ""}
            />
            {data?.scholarship?.program?.jsonLogo && (
              <div className="lottie-icon w-52 h-52 absolute -z-10 -right-10 -top-24 icon-">
                <LottieAnimation animationData={data?.scholarship?.program?.jsonLogo} />
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-7">
            <div className="my-12 md:mt-0 flex gap-6">
              <img className="object-cover" src={data?.scholarship?.company?.colorLogo?.title} width={80} height={80} />
              <div>
                <span className="text-blac text-lg font-light leading-6">Powered by:</span>
                <p className="mt-2.5 text-2xl font-light leading-6">{data?.scholarship?.company?.name}</p>
              </div>
            </div>
            <Card>
              <h4 className="text-primary text-base font-medium">Application closes in</h4>
              {data?.scholarship?.applicationEndDate && (
                <Countdown
                  className="text-[27px] font-light space-x-3"
                  targetDate={new Date(data?.scholarship?.applicationEndDate)}
                />
              )}
            </Card>
            <Card className="grid grid-cols-2 gap-y-6 relative grid-card after:hidden xl:after:block">
              <CardEntry title="Location" content={data?.scholarship?.location?.name} />
              <CardEntry title="Duration" content={`${data?.scholarship?.duration} Years Full-Time`} />
              <CardEntry title="Start date" content={startDate} />
              <CardEntry title="End date" content={endDate} />
            </Card>
          </div>
          <div className="md:hidden mt-12 px-8">
            <MovingContainer
              className=""
              title="A fully funded work-study program to launch your tech career"
              description={data?.scholarship?.description?.[0]?.data ?? ""}
              position={data?.scholarship?.program?.name ?? ""}
            />
          </div>
        </div>
        <Button className="mx-8 md:mx-0 mt-12">Apply Now</Button>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default CTA;
