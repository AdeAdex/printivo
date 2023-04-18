import React from "react";
import logoCard from "../assets/Card.png";

function CardContainer(props) {
  return (
    <>
      <div className="card" style={{ width: "23.2%" }}>
        <div className="card-img-container">
          <img src={props.img} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <p className="card-price">
            {props.price} <span className="card-percent">{props.percent}</span>
          </p>
          <button className="card-btn btn btn-sm px-3 d-flex justify-content-between">
            <span className="card-btn-text my-auto">
              browse {props.btnTxt}{" "}
            </span>
            <i className="fas fa-angle-right my-auto"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
