import { FC } from "react";

const Social: FC = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/tijanisylla"
        className="home_social-icon"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/tijanisylla" className="home_social-icon">
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://instagram.com/tijani__sylla/"
        className="home_social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://twitter.com/Youngsylla2" className="home_social-icon">
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
