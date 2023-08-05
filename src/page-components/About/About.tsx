import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";

import CardsGrid from "./CardsGrid";

import "./About.styles.css";

const About: React.FC = () => {
  const { data, isLoading } = useGetDataScienceApprenticeshipZeptolab();

  return !isLoading ? (
    <section className="mt-44" id="about">
      <div className="container max-w-6xl mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="flex-container">
            <div className="image-container" />
            <div className="relative z-10 bg-white border pt-44 px-4 py-2 w-full md:pt-16 sm:pl-10 md:mx-0 md:border-none lg:pt-16 lg:pl-28 space-y-10">
              <h1 className="text-primary text-4xl md:text-5xl font-medium leading-10">About the apprenticeship</h1>
              <p className="text-lg md:text-xl font-light leading-8">{data?.scholarship?.about?.[0]?.data}</p>
            </div>
          </div>
        </div>
        <CardsGrid />
      </div>
    </section>
  ) : (
    <></>
  );
};

export default About;
