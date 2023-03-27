import React from "react";
import logo from '../assets/printivo.png'
import logoCard from '../assets/Card.png';

const NavCompo = () => {
  return (
    <>
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
            className="d-flex my-auto justify-content-between"
            style={{ width: "40%" }}
          >
            <div className="nav-contact d-flex my-auto">
              <span>Need help? Call:</span>
              <a className="me-2" href="tel:+2347033959586">
                +2347033959586,
              </a>
              <a href="tel:+23409014145628">+23409014145628</a>
            </div>
            <i className="fab fa-whatsapp my-auto"></i>
            <div className="country my-auto d-flex gap-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2FIvEbniUcb67AEOLB8w_WXGX6Lme67jYJxNMSdj&s"
                alt=""
                style={{ width: "20px" }}
              />
              <span>Nigeria</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column w-100" style={{padding: '0px 100px 60px 100px'}}>
          <div
            className="d-flex w-100 justify-content-evenly"
            style={{ marginTop: "20px", height: '70px'}}
          >
            <div className="my-auto" style={{ width: "45%" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "150px"}}
              />
            </div>
            <div className="menu d-flex gap-5" style={{ width: "60%" }}>
              <div className="dropdown d-flex my-auto">
                <a href="">Home</a>
                <a href="">All Products</a>
                <a href="">Become a Reseller</a>
                <a href="">Cost Calculator</a>
              </div>
              <div className="account d-flex my-auto">
                <a href="" style={{color: '#D87F81'}}>Sign in</a>
                <a href="">Create Account</a>
                <i className="fas fa-cart-shopping fs-5"></i>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex gap-5 position-relative" style={{color: '#384A62', marginTop: '60px'}}>
            <div className="w-50">
                <div className="text-capitalize fw-bold" style={{fontSize: '4.2rem', fontFamily: '"dm serif display",serif'}}>quality prints</div>
                <p className="fw-bold" style={{fontSize: '25px', color: '#708095'}}>Shipped to your doorstep</p>
                <p className="mt-4 fw-bold" style={{fontSize: '16px'}}>What would you like to print today?</p>
                <input type="text" name="" id="" className="search w-100" style={{padding: '30px', border: 'none', fontSize: '14px'}}/>
            </div>
            <div className="w-50">
              <img className="card-img" src={logoCard} alt="" style={{width: '450px', height: '300px'}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavCompo;
