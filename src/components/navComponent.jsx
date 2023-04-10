import React from "react";
import logo from "../assets/printivo.png";
import logoCard from "../assets/Card.png";
import whatsApp from "../assets/WhatsApp_icon.png.webp";

const NavCompo = () => {

  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      naroSticky.style.setProperty("display", "block", "important");
    } else if (document.body.scrollTop < 150 ||
      document.documentElement.scrollTop < 150) {
        naroSticky.style.setProperty("display", "none", "important");
    } else {
    }
  };

  const tryClose = () => {
    cls.style.setProperty("display", "none", "important");
    cls.style.setProperty("height", "0px", "important");
  }

  return (
    <>
    <div
          className="nav-caro-sticky d-flex flex-column w-100 shadow"
          style={{ padding: "0px 100px 0px 100px" }} id="naroSticky"
        >
          <div
            className="img-signin d-flex w-100 justify-content-evenly"
            style={{ marginTop: "0px", height: "70px" }}
          >
            <div className="img-container my-auto" style={{ width: "45%" }}>
              <img src={logo} alt="" style={{ width: "150px" }} />
            </div>
            <div className="menu d-flex gap-5" style={{ width: "60%" }}>
              <div className="dropdowns d-flex my-auto">
                <a href="">Home</a>
                <a href="">All Products</a>
                <a href="">Become a Reseller</a>
                <a href="">Cost Calculator</a>
              </div>
              <div className="account d-flex my-auto">
                <a href="" style={{ color: "#D87F81" }}>
                  Sign in
                </a>
                <a href="" className="create-acc">
                  Create Account
                </a>
                <i className="fas fa-cart-shopping fs-5"></i>
              </div>
            </div>
          </div>


          <div className="d-flex gap-2 mt-2">
          <div className="dropdown">
            <button
            className="menu-btn d-flex justify-content-center  fw-bold" data-bs-toggle="dropdown"
              aria-expanded="false"
            style={{ width: "85px", backgroundColor: "white", paddingTop: "12px", paddingBottom: "12px", borderRadius: '5px', border: 'none' }}
          >
            Menu
          </button>
            <ul className="dropdown-menu">
            <div className="d-flex justify-content-end px-3 py-3  position-fixed top-0" style={{width: '90%'}}><i className="fas fa-times fs-2 text-black" style={{cursor: 'pointer'}} data-bs-dismiss="dropdown"></i></div>
              <li className="mt-5">
                <a className="dropdown-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
            </ul>
          </div>
          <input type="text" name="" id="" placeholder="Quick Search" className="sticky-search w-75 fw-bold px-3" style={{backgroundColor: "white", borderRadius: '5px', border: '1px solid gray'}} />
          </div>
        </div>



      <section className="nav d-flex flex-column">
        <div className="nav1 d-flex justify-content-around w-100">
          <div
            className="nav1-link d-flex my-auto gap-5"
            style={{ width: "33%" }}
          >
            <a style={{ fontSize: "14px" }} href="">
              corporate pricing
            </a>
            <a style={{ fontSize: "14px" }} href="">
              discover stores
            </a>
            <a style={{ fontSize: "14px" }} href="">
              track orders
            </a>
          </div>
          <div
            className="nav-contact-container d-flex my-auto justify-content-between"
            style={{ width: "40%" }}
          >
            <div className="nav-contact d-flex my-auto">
              <span>Need help? Call:</span>
              <a className="me-2" href="tel:+2347033959586">
                +2347033959586,
              </a>
              <a href="tel:+23409014145628">+23409014145628</a>
            </div>
            <img src={whatsApp} alt="" style={{ width: "40px", cursor: 'pointer' }}/>
            <div className="country my-auto d-flex gap-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2FIvEbniUcb67AEOLB8w_WXGX6Lme67jYJxNMSdj&s"
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
              <span>Nigeria</span>
            </div>
          </div>
        </div>
        <div
          className="nav-caro d-flex flex-column w-100"
          style={{ padding: "0px 100px 60px 100px" }}
        >
          <div
            className="img-signin d-flex w-100 justify-content-evenly"
            style={{ marginTop: "20px", height: "70px" }}
          >
            <div className="img-container my-auto" style={{ width: "45%" }}>
              <img src={logo} alt="" style={{ width: "150px" }} />
            </div>
            <div className="menu d-flex gap-5" style={{ width: "60%" }}>
              <div className="dropdowns d-flex my-auto">
                <a href="">Home</a>
                <a href="">All Products</a>
                <a href="">Become a Reseller</a>
                <a href="">Cost Calculator</a>
              </div>
              <div className="account d-flex my-auto">
                <a href="" style={{ color: "#D87F81" }}>
                  Sign in
                </a>
                <a href="" className="create-acc">
                  Create Account
                </a>
                <i className="fas fa-cart-shopping fs-5"></i>
              </div>
            </div>
          </div>


          <div className="dropdown">
            <button
            className="menu-btn btn d-flex py-2 justify-content-center mt-3" data-bs-toggle="dropdown"
              aria-expanded="false"
            style={{ width: "80px", backgroundColor: "white" }}
          >
            Menu
          </button>
            <ul className="dropdown-menu">
            <div className="d-flex justify-content-end px-3 py-3 " style={{width: '90%'}}><i className="fas fa-times fs-2 text-black " style={{cursor: 'pointer'}} data-bs-dismiss="dropdown"></i></div>
              <li className="mt-2">
                <a className="dropdown-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <i className="fas fa-angle-right my-auto"></i>
              </li>
            </ul>
          </div>
          
          <div
            className="q-print-con w-100 d-flex gap-5 position-relative"
            style={{ color: "#384A62", marginTop: "60px" }}
          >
            <div className="q-print w-50">
              <div
                className=" text-capitalize fw-bold"
                style={{
                  fontSize: "4.2rem",
                  fontFamily: '"dm serif display,serif',
                }}
              >
                quality prints
              </div>
              <p
                className="ship fw-bold"
                style={{ fontSize: "25px", color: "#708095" }}
              >
                Shipped to your doorstep
              </p>
              <p className="mt-4 fw-bold" style={{ fontSize: "16px" }}>
                What would you like to print today?
              </p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for Business cards, T-shirts, Mugs, etc"
                className="search w-100"
                style={{ padding: "30px", border: "none", fontSize: "14px" }}
              />
            </div>
            <div className="nav-card-container w-50">
              <img
                className="card-img"
                src={logoCard}
                alt=""
                style={{ width: "450px", height: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavCompo;
