import React, { useState } from "react";
import "./Qualification.css";

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1);
  const toggleTab = (index: number): void => {
    setToggleModal(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* START BUTTON */}
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
        {/* END BUTTON */}

        {/* Content 1 */}
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
                <h3 className="qualififaction__title">Education1</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - Present
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
                <h3 className="qualififaction__title">Education2</h3>
                <span className="qualification__subtitle">
                  United States - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - 2021
                </div>
              </div>
            </div>
            {/* GRP 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualififaction__title">Education 3</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - Present
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
                <h3 className="qualififaction__title">Education4</h3>
                <span className="qualification__subtitle">
                  United States - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - 2021
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
                <h3 className="qualififaction__title">Experience1</h3>
                <span className="qualification__subtitle">
                  Hammacher - Chicago,IL
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - 2021
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
                <h3 className="qualififaction__title">Experience2</h3>
                <span className="qualification__subtitle">Elmhurst - IL</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2022 - 2022
                </div>
              </div>
            </div>
            {/* GRP 7 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualififaction__title">Experience3</h3>
                <span className="qualification__subtitle">
                  Fullstack Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - 2021
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
                <h3 className="qualififaction__title">Experience4</h3>
                <span className="qualification__subtitle">Remote</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2022 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
