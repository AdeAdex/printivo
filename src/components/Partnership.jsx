import React from "react";
import partnerImg from "../assets/partner.png";

const Partnership = () => {
  return (
    <>
      <section
        className=""
        style={{ width: "85%", margin: "80px auto 0px auto" }}
      >
        <div className="w-50">
          <h3 style={{color: '#384A62'}}>Nigeria’s No. 1 online print shop 👑</h3>
          <h5 style={{color: '#506683'}}>
            Our print services and solutions are trusted by these brands and
            over 15,000 other businesses in Nigeria.
          </h5>
        </div>
        <div className="w-100 mt-5">
                <img src={partnerImg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Partnership;
