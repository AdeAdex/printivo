import React from "react";

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
            <i className="about-icon fas fa-clock"></i>
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
            <i className="about-icon fas fa-clock"></i>
            <div>
            <h6>100% Top Quality</h6>
            Only the finest materials, machines and people will be involved in fulfilling your order.
            </div>
          </div>
          <div
            className="each-about bg-white container-fluid py-3 d-flex gap-3"
            style={{ height: "160px", width: "25%" }}
          >
            <i className="about-icon fas fa-clock"></i>
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
