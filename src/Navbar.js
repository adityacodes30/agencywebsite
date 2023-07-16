import stl from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={stl.nav}>
      <div className={stl.subnav}>
        <span className={stl.navtxt}>Sublime Labs</span>
        <div className={stl.btn}></div>
      </div>
    </div>
  );
};

export default Navbar;
