import React from "react";

const Feedback = (props) => {
  return (
    <>
        {/* <h3 className="fw-bold" style={{color: '#384A62'}}>What Customers Say About Us 🙌🏾</h3> */}
        
                <div className="bg-white container-fluid py-3 d-flex gap-4" style={{height: '160px', width: '33.3%'}}>
                  <i className="fab fa-twitter border" style={{color: '#1DA1F2', width: '35px', height: '35px', borderRadius: '50%', padding: '10px', fontSize: '14px'}}></i>
                  <div className="mt-2" style={{fontSize: '14px'}}>
                    <div className="mb-2">{props.userFeedbackName} <span style={{color: '#1DA1F2'}}>{props.feedbackUsername}</span></div>
                    <div><span>{props.txt1}</span> <span style={{color: '#1DA1F2'}}>{props.printivo}</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</div>
                  </div>
                </div>
    </>
  );
};

export default Feedback;
