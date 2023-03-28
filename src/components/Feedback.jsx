import React from "react";

const Feedback = () => {
  return (
    <>
      <section className="feedback" style={{padding: '60px 110px', backgroundColor: '#EDF6FD', marginTop: '70px'}}>
        <h3 className="fw-bold" style={{color: '#384A62'}}>What Customers Say About Us 🙌🏾</h3>
        <div style={{color: '#384A62'}} className="each-feed-container d-flex w-100 gap-4 mt-4">
                <div className="bg-white container-fluid py-3" style={{height: '160px', width: '33.3%'}}>Adeolu</div>
                <div className="bg-white container-fluid py-3" style={{height: '160px', width: '33.3%'}}>Adeolu</div>
                <div className="bg-white container-fluid py-3" style={{height: '160px', width: '33.3%'}}>Adeolu</div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
