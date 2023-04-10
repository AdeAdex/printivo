import React from "react";
import techCrunch from "../assets/amaze1.svg";
import forbes from "../assets/amaze2.svg";
import techPoint from "../assets/Techpoint_Logo_ucyvgg.png";
import techCable from "../assets/amaze3.svg";
import cnn from "../assets/amaze4.svg";

const FooterAmazingWork = () => {
  return (
    <>
      <section
        className="feedback"
        style={{
          padding: "80px 110px 80px 110px",
          backgroundColor: "#F7F6F4",
          marginTop: "70px",
        }}
      >
        <h3 className="fw-bold" style={{ color: "#384A62" }}>
          Our amazing work got noticed by:
        </h3>
        <div className="partner-img notice d-flex justify-content-between w-100 mt-5">
          <div className="notice-div d-flex flex-column gap-2" style={{height: '60px'}}>
            <img src={techCrunch} alt="" style={{height: '50%', objectFit: 'contain' }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column gap-2" style={{height: '60px'}}>
            <img src={forbes} alt="" style={{height: '50%', objectFit: 'contain' }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column gap-2" style={{height: '60px'}}>
            <img src={techPoint} alt="" style={{height: '50%', objectFit: 'contain' }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column gap-2" style={{height: '60px'}}>
            <img src={techCable} alt="" style={{height: '50%', objectFit: 'contain' }} />
            <a href="" className="text-black">
              Read the article here
            </a>
          </div>
          <div className="notice-div d-flex flex-column gap-2" style={{height: '60px'}}>
            <img src={cnn} alt="" style={{height: '50%', objectFit: 'contain' }} />
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
