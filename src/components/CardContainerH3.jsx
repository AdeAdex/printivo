import React from "react";

const CardContainerH3 = (props) => {
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
              textTransform: 'capitalize'
            }}
          >
            {props.properties}
          </div>
          <div
            className="pop-prod-2"
            style={{ color: "#D77F81", fontWeight: "bold", textTransform: 'capitalize' }}
          >
            {props.properties2}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardContainerH3;
