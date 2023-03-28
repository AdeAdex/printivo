import React from 'react'

const PopularCardContainer = () => {
  return (
    <>
        <section
        className="product-sect"
        style={{ width: "85%", margin: "60px auto 0px auto" }}
      >
        <div className="d-flex justify-content-between mb-4">
          <div
          className='pop-prod'
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              fontFamily: 'dm serif',
            }}
          >
            Popular Categories
          </div>
          <div className="pop-prod-2" style={{ color: "#D77F81", fontWeight: "bold", fontSize: '16px' }}>
            See All Categories
          </div>
        </div>
        <div className="w-100 d-flex flex-wrap" style={{gap: '30px'}}>
          <div className="card" style={{ width: "23.2%" }}>
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Greeting Cards</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Greeting Cards </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
          <div className="card" style={{ width: "23.2%" }}>
            <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Stickers</h5>
              <p className="card-text">starting at</p>
              <p className="card-price">₦8,855 <span className="card-percent">per 100</span></p>
              <button className="card-btn btn btn-sm px-3 d-flex justify-content-between"><span className="card-btn-text my-auto">browse Stickers </span><i className="fas fa-angle-right my-auto"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularCardContainer