import menuIconImg from "@/assets/menu-icon.png";

import "./Navbar.styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar navbar-start">
        <h3 className="logo">Harbour.Space</h3>
        <span className="interaction-design-text uppercase">/Interaction Design</span>
      </div>
      <div className="navbar navbar-end">
        <img src={menuIconImg} width={35} height={30} alt="Menu Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
