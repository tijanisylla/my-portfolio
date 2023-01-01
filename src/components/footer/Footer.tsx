import React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  const yeareDate: Date = new Date();
  const thisYear: number = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Tijani Sylla</h1>

        <ul className="footer__list">
          <li>
            <a href="/#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="/#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="/#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/tijanisylla"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/tijanisylla"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://instagram.com/tijani__sylla/"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Youngsylla2"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright {"  "} {thisYear}. {"  "}All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
