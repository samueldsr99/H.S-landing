import menuIconImg from "@/assets/menu-icon.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-primary px-4 md:px-12">
      <div className="inline-flex">
        <h3 className="font-bold uppercase">Harbour.Space</h3>
        <span className="ml-2 text-sm uppercase">/Interaction Design</span>
      </div>
      <div className="">
        <img src={menuIconImg} width={35} height={30} alt="Menu Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
