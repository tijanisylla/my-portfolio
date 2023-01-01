import { FC, useState, useEffect } from "react";
import { darkModeType } from "../data/Models";
import { listNavBar } from "../data/data";
import { Link } from "react-scroll";
import "./Header.css";

const Header: FC<darkModeType> = ({
  IsdarkMode,
  setIsDarkMode,
  toggleIsDarkMode,
}) => {
  /* ========== Toogle Menu ==========  */
  const [Toogle, setToggle] = useState<boolean>(false);

  /* ========== Change Background Navbar ==========  */
  // When the scroll is higher than 200 viewport height, add the scroll-header class to tag with the header tag
  const headerListener = (): void => {
    const headerPosition = document.querySelector(".header") as HTMLElement;
    if (window.scrollY >= 80) headerPosition.classList.add("scroll-header");
    else headerPosition.classList.remove("scroll-header");
  };

  useEffect((): void => {
    // I am calling the function headerListener in here.
    window.addEventListener("scroll", headerListener);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/#" className="nav__logo">
          Software engineer
        </a>
        <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {listNavBar.map(({ id, item, icon, href }) => {
              return (
                <li className="nav__item" key={id}>
                  <Link
                    className="nav__link"
                    to={`${href}`}
                    spy={true}
                    smooth={true}
                    duration={50}
                  >
                    <i className={`${icon} nav__icon`}></i>
                    {item}
                  </Link>
                </li>
              );
            })}
            <li>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={IsdarkMode}
                  onChange={() => toggleIsDarkMode()}
                />
                <span className="slider round"> </span>
              </label>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!Toogle)}
          ></i>
          <div></div>
        </div>

        {/* <span style={{ color: IsdarkMode ? "grey" : "#FFE87C" }}>
              <i className="uil uil-sun"></i>
            </span> */}
        {/* <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={IsdarkMode}
                    onChange={() => toggleIsDarkMode()}
                  />
                  <span className="slider round"> </span>
                </label>
              </div> */}
        {/* <span style={{ color: IsdarkMode ? "#c96dfd" : "grey" }}>
              <i className="uil uil-moon"></i>
            </span> */}
        {/* Toggle */}
        <div className="nav__toggle" onClick={() => setToggle(!Toogle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
