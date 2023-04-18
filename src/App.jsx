import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavCompo from "./components/navComponent";
import "fontawesome-free-v6/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CardContainer from "./components/CardContainer";
import Partnership from "./components/Partnership";
import Feedback from "./components/Feedback";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import CardContainerH3 from "./components/CardContainerH3";

function App() {
  return (
    <>
      <Router>
        <Routes>{/* <Route path="/" element={</>} /> */}</Routes>
        <NavCompo />
        <CardContainerH3
          properties="popular products"
          properties2="see all products"
        ></CardContainerH3>
        <section
          className="product-sect"
          style={{ width: "85%", margin: "0px auto 0px auto" }}
        >
          <div className="w-100 d-flex flex-wrap" style={{ gap: "30px" }}>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1440201227_two-sided-business-cards-by-printivo.png"
              title="Two-sided Business Cards"
              text="starting at"
              price="₦8,855"
              percent="per 100"
              btnTxt="Two-sided Business Cards"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572522725_flyer-1sided.png"
              className="card-img-top"
              title="A5 flyers (Single Sided)"
              text="starting at"
              price="₦15,000"
              percent="per 100"
              btnTxt="A5 flyers (Single Sided)"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1656003107_social-media--15.png"
              title='Round Stickers (3.5" Diameter)'
              text="starting at"
              price="₦9,900"
              percent="per 100"
              btnTxt='Round Stickers (3.5" Diameter)'
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1661456358_social-media--16.png"
              title="Simple Mugs"
              text="starting at"
              price="₦2,750"
              percent="per 1"
              btnTxt="Simple Mugs"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1439790190_postcard.jpg"
              title="Postcards (A6)"
              text="starting at"
              price="₦2,903"
              percent="per 50"
              btnTxt="Postcards (A6)"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1446183154_big%20rollup%20banner.png"
              title="Roll Up Banners (Big Base)"
              text="starting at"
              price="₦32,000"
              percent="per 1"
              btnTxt="Roll Up Banners (Big Base)"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572259118_product-5-(1).png"
              className="card-img-top"
              title="A2 Posters"
              text="starting at"
              price="₦41,400"
              percent="per 100"
              btnTxt="A2 Posters"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473167305_trifold-brochure-printing.png"
              title="Trifold Brochures"
              text="starting at"
              price="₦27,600"
              percent="per 100"
              btnTxt="Trifold Brochures"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1456215784_12.png"
              title="Landscape ID Cards"
              text="starting at"
              price="₦1,800"
              percent="per 1"
              btnTxt="Landscape ID Cards"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1485151940_White-tshirt.png"
              title="Off White T-shirts"
              text="starting at"
              price="₦3,499"
              percent="per 1"
              btnTxt="Off White T-shirts"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572258123_product-3-(1).png"
              title="A4 Branded Paper Bags"
              text="starting at"
              price="₦60,950"
              percent="per 100"
              btnTxt="A4 Branded Paper Bags"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg"
              title="A4 Courier Bags"
              text="starting at"
              price="₦16,000"
              percent="per 100"
              btnTxt="A4 Courier Bags"
            ></CardContainer>
          </div>
        </section>
        <CardContainerH3
          properties="popular categories"
          properties2="see all categories"
        ></CardContainerH3>
        <section
          className="product-sect"
          style={{ width: "85%", margin: "0px auto 0px auto" }}
        >
          <div className="w-100 d-flex flex-wrap" style={{ gap: "30px" }}>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png"
              title="Greeting Cards"
              text="starting at"
              price="₦17,250"
              percent="per 50"
              btnTxt="Greeting Cards"
            ></CardContainer>
            <CardContainer
              img="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png"
              title="Stickers"
              text="starting at"
              price="₦4,949"
              percent="per 75"
              btnTxt="Stickers"
            ></CardContainer>
          </div>
        </section>
        <Partnership />
        <section className="feedback" style={{padding: '60px 110px', backgroundColor: '#EDF6FD', marginTop: '70px'}}>
        <div style={{color: '#384A62'}} className="each-feed-container d-flex w-100 gap-4 mt-4">
        <Feedback
          userFeedbackName="Adeolu Adex"
          feedbackUsername="@AdeAdex_"
          txt1="I am now the unofficial"
          printivo="@Printivo"
        ></Feedback>
        <Feedback
          userFeedbackName="Grace Grace"
          feedbackUsername="@Grace24"
          txt1="I am now the unofficial"
          printivo="@Printivo"
        ></Feedback>
        <Feedback
          userFeedbackName="Adeolu Adex"
          feedbackUsername="@AdeAdex_"
          txt1="I am now the unofficial"
          printivo="@Printivo"
        ></Feedback>
        </div>
        </section>
        <AboutUs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
