import React from "react";
import "./section.css";
import downArrow from "../../assets/down-arrow.svg";

const Section = ({ data }) => {
  const { title, description, leftBtnText, rightBtnText, backgroundImg } = data;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="container"
    >
      <div className="model_header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="buttons_group">
        <div className="buttons_section">
          <div className="left_button">{leftBtnText}</div>

          {rightBtnText && <div className="right_button">{rightBtnText}</div>}
        </div>

        {title === "Model 3" ? (
          <img src={downArrow} alt="down arrow" className="down_arrow" />
        ) : null}
      </div>
    </div>
  );
};

export default Section;
