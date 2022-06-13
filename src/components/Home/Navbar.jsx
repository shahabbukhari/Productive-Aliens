import React from "react";
import Logo from "../../Assets/Logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-items">
        <ul>
          {[
            "Home",
            "Massage On-Demand",
            "Events",
            "Our story",
            "Blog",
            "About Us",
            "Gift Card",
          ].map((item) => (
            <li className={item === "Home" ? "highlight" : ""}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
