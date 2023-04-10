import React from "react";

const Feedback = () => {
  return (
    <>
      <section className="feedback" style={{padding: '60px 110px', backgroundColor: '#EDF6FD', marginTop: '70px'}}>
        <h3 className="fw-bold" style={{color: '#384A62'}}>What Customers Say About Us 🙌🏾</h3>
        <div style={{color: '#384A62'}} className="each-feed-container d-flex w-100 gap-4 mt-4">
                <div className="bg-white container-fluid py-3 d-flex gap-4" style={{height: '160px', width: '33.3%'}}>
                  <i className="fab fa-twitter border" style={{color: '#1DA1F2', width: '35px', height: '35px', borderRadius: '50%', padding: '10px', fontSize: '14px'}}></i>
                  <div>adex</div>
                </div>
                <div className="bg-white container-fluid py-3 d-flex gap-4" style={{height: '160px', width: '33.3%'}}>
                  <i className="fab fa-twitter border" style={{color: '#1DA1F2', width: '35px', height: '35px', borderRadius: '50%', padding: '10px', fontSize: '14px'}}></i>
                  <div>adex</div>
                </div>
                <div className="bg-white container-fluid py-3 d-flex gap-4" style={{height: '160px', width: '33.3%'}}>
                  <i className="fab fa-twitter border" style={{color: '#1DA1F2', width: '35px', height: '35px', borderRadius: '50%', padding: '10px', fontSize: '14px'}}></i>
                  <div>adex</div>
                </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
