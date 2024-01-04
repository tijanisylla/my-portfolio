import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import "./Qualification.css";

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1);
  const toggleTab = (index: number): void => {
    setToggleModal(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualification</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My personal journey</span>
      </Slide>
      <div className="qualification__container container">
        {/*! START BUTTON */}
        <div className="qualification__tabs">
          <div
            className={
              toggleModal === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleModal === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/*! END BUTTON */}

        {/* Content 1 */}
        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    University of Illinois at Chicago
                  </h3>
                  <span className="qualification__subtitle">
                    Fullstack development{" "}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"></i> Chicago,IL <br />
                    <i className="uil uil-calender"></i> 2021 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Lycée des nations</h3>
                  <span className="qualification__subtitle">
                    High School Diploma
                  </span>
                  <div className="qualification__calender">
                    {" "}
                    <i className="uil uil-map-marker"></i> Mauritania, NKTT{" "}
                    <br />
                    <i className="uil uil-calender"></i> 2009 - 2013
                  </div>
                </div>
              </div>
              {/* GRP 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Spanish</h3>
                  <span className="qualification__subtitle">Sevilla Acoje</span>
                  <div className="qualification__calender">
                    {" "}
                    <i className="uil uil-map-marker"></i>Spain, Seville <br />
                    <i className="uil uil-calender"></i> 2015 - 2016
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 4 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Polyglot</h3>
                  <span className="qualification__subtitle">
                    I speak 6 Languages
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"></i> Globe <br />
                    <i className="uil uil-calender"></i> 2021 - present
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 5 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Multiple,Inc</span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"> </i>Chicago, IL <br />
                    <i className="uil uil-calender"></i> 2023 - 2024
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 6 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Software Engineer</h3>
                  <span className="qualification__subtitle">
                    FoodMix Marketing
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"> </i>Elmhurst, IL <br />
                    <i className="uil uil-calender"></i> 2022 - 2022
                  </div>
                </div>
              </div>
              {/* GRP 7 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Customer Service</h3>
                  <span className="qualification__subtitle">Twilight</span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"> </i>Spain, Mallorca
                    <br />
                    <i className="uil uil-calender"></i> 2021 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 8 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Software Engineer</h3>
                  <span className="qualification__subtitle"> Freelance</span>
                  <div className="qualification__calender">
                    <i className="uil uil-map-marker"> </i> Remote - Anywhere
                    <br />
                    <i className="uil uil-calender"></i> 2022 - present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Qualification;
