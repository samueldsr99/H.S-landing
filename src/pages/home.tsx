import Navbar from "@/components/Navbar";
import About from "@/page-components/About/About";
import CTA from "@/page-components/CTA/CTA";
import FAQ from "@/page-components/FAQ/FAQ";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pb-8 md:pb-20 lg:pb-36">
        <CTA />
        <About />
        <FAQ />
      </main>
    </>
  );
};

export default HomePage;
