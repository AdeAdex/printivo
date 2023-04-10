import React from "react";
import count1 from "../assets/count1.svg";
import count2 from "../assets/count2.svg";
import count3 from "../assets/count3.svg";

const AboutUs = () => {
  return (
    <>
      <section
      className="about-us"
        style={{
          padding: "40px 110px",
          backgroundColor: "#fff",
          marginTop: "70px",
        }}
      >
        <h3 className="fw-bold" style={{ color: "#384A62" }}>You can count on us for:</h3>
        <div style={{ color: "#384A62" }} className="about-div d-flex w-100 gap-4 mt-4">
          <div
            className="each-about bg-white container-fluid py-3 d-flex gap-3"
            style={{ height: "160px", width: "25%" }}
          >
            <img src={count1} alt="" />
            <div>
              <h6>Fast Turnaround Within Days</h6>  
              Your order gets to you within 3-7
              working days via DHL or our very own Printivo Direct.
            </div>
          </div>
          <div
            className="each-about bg-white container-fluid py-3 d-flex gap-3"
            style={{ height: "160px", width: "25%" }}
          >
            <img src={count2} alt="" />
            <div>
            <h6>100% Top Quality</h6>
            Only the finest materials, machines and people will be involved in fulfilling your order.
            </div>
          </div>
          <div
            className="each-about bg-white container-fluid py-3 d-flex gap-3"
            style={{ height: "160px", width: "25%" }}
          >
            <img src={count3} alt="" />
            <div>
            <h6>Affordable Services</h6>
            All products are adequately priced to ensure you get value for your money at all times.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
