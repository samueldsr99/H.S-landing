import Button from "@/components/Button/Button";
import Navbar from "@/components/Navbar";
import About from "@/page-components/About/About";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Button>Hello</Button>
        <About />
      </main>
    </>
  );
};

export default HomePage;
