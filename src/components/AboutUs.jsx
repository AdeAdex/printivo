import React from "react";

const AboutUs = (props) => {
  return (
    <>
      <div
        className="each-about bg-white container-fluid py-3 d-flex gap-3"
        style={{ height: "160px", width: "25%" }}
      >
        <img src={props.img} alt="" />
        <div>
          <h6>{props.title}</h6>
          {props.description}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
