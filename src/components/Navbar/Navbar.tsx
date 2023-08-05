import menuIconImg from "@/assets/menu-icon.png";
import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";

const Navbar: React.FC = () => {
  const { data } = useGetDataScienceApprenticeshipZeptolab();

  return (
    <nav className="bg-primary px-4 md:px-12">
      <div className="h-16 flex justify-between items-center container max-w-7xl mx-auto">
        <div className="inline-flex">
          <h3 className="text-white font-bold uppercase">Harbour.Space</h3>
          <span className="text-white ml-2 text-sm uppercase">/{data?.scholarship?.program?.name}</span>
        </div>
        <div className="">
          <img src={menuIconImg} width={35} height={30} alt="Menu Icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
