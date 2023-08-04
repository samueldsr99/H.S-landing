import CardsGrid from "./CardsGrid";

const About: React.FC = () => {
  return (
    <section className="mt-5 px-5 md:px-40" id="about">
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-x-30">
        <div className="relative inline-flex items-center justify-center shrink-0">
          <img className="w-full h-auto rounded-full z-10 absolute" src="/about-desktop.png" width={380} height={380} />
          <img className="w-full h-auto z-0" src="/pattern-1.svg" width={438} height={438} />
        </div>
        <div className="mt-8 space-y-10">
          <h1 className="text-primary text-5xl font-medium leading-10">About the apprenticeship</h1>
          <p className="text-xl font-light leading-8">
            Our scholarships are designed to give talented and driven young people from any background access to
            top-class education, experience and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
      <CardsGrid />
    </section>
  );
};

export default About;
