import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";

function NavBar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNav(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" smooth={true} duration={2000} className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <ul className="menu">
        <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
        <li><Link to="products" smooth={true} duration={2000}>Products</Link></li>
        <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
