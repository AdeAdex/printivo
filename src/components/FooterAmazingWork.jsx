import React from "react";
import techPoint from "../assets/Techpoint_Logo_ucyvgg.png";

const FooterAmazingWork = () => {
  return (
    <>
      <section
        className="feedback"
        style={{
          padding: "60px 110px 80px 110px",
          backgroundColor: "#F7F6F4",
          marginTop: "70px",
        }}
      >
        <h3 className="fw-bold" style={{ color: "#384A62" }}>
          Our amazing work got noticed by:
        </h3>
        <div className="partner-img notice d-flex justify-content-between w-100 mt-5">
          <div className="notice-div d-flex flex-column" style={{}}>
            <img src={techPoint} alt="" style={{ width: "120px" }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column" style={{}}>
            <img src={techPoint} alt="" style={{ width: "120px" }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column" style={{}}>
            <img src={techPoint} alt="" style={{ width: "120px" }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column" style={{}}>
            <img src={techPoint} alt="" style={{ width: "120px" }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column" style={{}}>
            <img src={techPoint} alt="" style={{ width: "120px" }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterAmazingWork;
