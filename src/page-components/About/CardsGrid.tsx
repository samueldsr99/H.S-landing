import clsx from "classnames/bind";

import Card, { CardTitle } from "@/components/Card";
import { CardEntry } from "@/components/Card/Card";
import Divider from "@/components/Divider";
import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";

const classes = clsx.bind({
  "card-subtitle": "mt-2 text-[#6A6A6A] text-2xl font-light",
  "card-paragraph": "text-base font-light leading-6",
});

const formatPrice = (price: number = 0) => {
  return `€${price.toLocaleString()}`;
};

const CardsGrid: React.FC = () => {
  const { data, isLoading } = useGetDataScienceApprenticeshipZeptolab();

  return !isLoading ? (
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-10">
      <Card className="col-span-1 flex flex-col justify-between shrink-0">
        <div>
          <CardTitle>Scholarship Value</CardTitle>
          <div className="mt-8 text-[#535353] text-5xl font-light">{formatPrice(data?.scholarship?.totalValue)}</div>
        </div>
        <div>
          <Divider className="mb-16 hidden lg:flex" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 px-4">
            <CardEntry title="Tuition covered" content={formatPrice(data?.scholarship?.tuition)} />
            <CardEntry title="Remaining" content={formatPrice(data?.scholarship?.remaining)} />
            <CardEntry
              className="col-span-2"
              title="Living stipend"
              content={`${formatPrice(data?.scholarship?.stipendPerYear)} (${formatPrice(
                data?.scholarship?.stipendPerMonth,
              )} / month)})`}
            />
          </div>
        </div>
      </Card>
      <div className="col-span-2 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Card>
            <CardTitle>Study commitment</CardTitle>
            <h3 className={classes("card-subtitle")}>{data?.scholarship?.studyCommitment} hours / day</h3>
            <Divider className="w-7 mt-6 mb-4" />
            <p className={classes("card-paragraph")}>{data?.scholarship?.studyCommitmentText}</p>
          </Card>
          <Card>
            <CardTitle>Work commitment</CardTitle>
            <h3 className={classes("card-subtitle")}>{data?.scholarship?.internshipCommitment} hours / day</h3>
            <Divider className="w-7 mt-6 mb-4" />
            <p className={classes("card-paragraph")}>{data?.scholarship?.internshipCommitmentText}</p>
          </Card>
        </div>
        <Divider className="uppercase my-6">Graduation</Divider>
        <Card className="px-10 pt-8 pb-4">
          <CardTitle>A full-time contract</CardTitle>
          <h3 className={classes("card-subtitle")}>1 Year / Full-Time</h3>
          <Divider className="w-7 mt-6 mb-4" />
          <p className={classes("card-paragraph")}>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
        </Card>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CardsGrid;
