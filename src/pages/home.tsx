import Navbar from "@/components/Navbar";
import About from "@/page-components/About/About";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pb-8 md:pb-20 lg:pb-36">
        <About />
      </main>
    </>
  );
};

export default HomePage;
