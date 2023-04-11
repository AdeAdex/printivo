import React from "react";
import logoCard from '../assets/Card.png';

function CardContainer() {
  return (
    <>
      <section
        className="product-sect"
        style={{ width: "85%", margin: "60px auto 0px auto" }}
      >
        <div className="d-flex justify-content-between mb-4">
          <div
          className="pop-prod"
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              fontFamily: 'dm serif display",serif',
            }}
          >
            Popular Products
          </div>
          <div className="pop-prod-2" style={{ color: "#D77F81", fontWeight: "bold" }}>
            See All Products
          </div>
        </div>
        <div className="w-100 d-flex flex-wrap" style={{gap: '30px'}}>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
          <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1440201227_two-sided-business-cards-by-printivo.png" className="card-img-top" alt="" />
          </div>
            <div className="card-body">
              <h5 className="card-title">Two-sided Business Cards</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Two-sided Business Cards </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572522725_flyer-1sided.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">A5 flyers (Single Sided)</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse A5 flyers (Single Sided) </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1656003107_social-media--15.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Round Stickers (3.5" Diameter)</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Round Stickers (3.5" Diameter) </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1661456358_social-media--16.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Simple Mugs</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Simple Mugs </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1439790190_postcard.jpg" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Postcards (A6)</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Postcards (A6) </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1446183154_big%20rollup%20banner.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Roll Up Banners (Big Base)</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Roll Up Banners (Big Base) </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572259118_product-5-(1).png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">A2 Posters</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse A2 Posters </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473167305_trifold-brochure-printing.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Trifold Brochures</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Trifold Brochures </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1456215784_12.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Landscape ID Cards</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Landscape ID Cards </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1485151940_White-tshirt.png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Off White T-shirts</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Off White T-shirts </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572258123_product-3-(1).png" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">A4 Branded Paper Bags</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse A4 Branded Paper Bags </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
          <div className="card-img-container">
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">A4 Courier Bags</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse A4 Courier Bags </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardContainer;
