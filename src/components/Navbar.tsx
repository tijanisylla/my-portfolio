import { useState } from "react";
import "./Style/Navbar.css";
import { listNavBar } from "./data/data";
const Navbar = () => {
  const [activNav, setActivNav] = useState<string>("Home");

  return (
    <div className="navbar">
      <ul>
        {listNavBar.map((link, idx) => {
          const { name, icon } = link;
          return (
            <li
              className={`list ${activNav === name && "active"}`}
              onClick={() => setActivNav(name)}
              key={idx}
            >
              <a href="/#">
                <span className="icon">
                  <i className={icon} />
                </span>
                <span className="text">{name}</span>
              </a>
            </li>
          );
        })}

        {/* Indicator */}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
