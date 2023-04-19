import React from "react";

const FooterContent = () => {
  return (
    <>
      <section
        className="feedback foot d-flex justify-content-between"
        style={{
          padding: "60px 250px 100px 110px",
          backgroundColor: "#384A62",
        }}
      >
        <div className="footer-a d-flex flex-column gap-2">
          <div>Printivo</div>
          <a href="">about us</a>
          <a href="">contact</a>
          <a href="">track order</a>
          <a href="">printivo promise</a>
          <a href="">printivo blog</a>
          <a href="">career</a>
        </div>
        <div className="footer-a d-flex flex-column gap-2">
          <div>Help and Information</div>
          <a href="">paper quality</a>
          <a href="">privacy policy</a>
          <a href="">terms and conditions</a>
          <a href="">font licenses</a>
          <a href="">shipping and delivery</a>
        </div>
        <div className="footer-a d-flex flex-column gap-2">
          <div>Make Money</div>
          <a href="">refer a friend & earn ₦1,000</a>
          <a href="">become a reseller</a>
          <a href="">sell your designs</a>
          <a href="">march store</a>
        </div>
        <div className="footer-a d-flex flex-column gap-2">
          <div>Follow Us</div>
          <div className="social-media d-flex justify-content-between w-100 px-3">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div>Accepted Payments</div>
          <div className="d-flex">
            <img
              src="pic/payment.png"
              style={{ objectFit: "contain", width: "180px" }}
              alt=""
            />
          </div>
          <div>Delivery</div>
          <div>
            <img src="pic/shipping"
              style={{ objectFit: "contain", width: "150px" }}
              alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterContent;
