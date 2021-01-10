import React from 'react';
import './glb.css';

function Mis() {

  function handleClick(){
    window.location.assign("https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx");}

  return (
    <div className="container">
      <div className="gb_home">
        <div className="card">
          <div className="gb_logo">
            <div className="circle"></div>
            <h1>MIS</h1>
          </div>
          <div className="info">
            <h3 className="title">Monthly Income Scheme</h3>
            <h5><strong>Type - </strong>Saving Account </h5>
            <h5><strong>Max.Limit for Single A/C -  </strong> - 4.5 lakh</h5>
            <h5><strong>Max.Limit for Joint A/C -  </strong> - 9 lakh</h5>
            <h5><strong>Maturity Period-</strong>5years</h5>
            <h5><strong>Min. Deposit Amount-</strong>Rs.15,000</h5>
          </div>
          <div className="foot">
            <p>for more detail..</p>
            <button className="gb_btn" onClick={handleClick.bind()}>Click here!</button>
          </div>
        </div>
    </div>
    </div>
    );
}


export default Mis;