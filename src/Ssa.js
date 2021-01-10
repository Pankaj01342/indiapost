import React from 'react';
import './glb.css';

function Ssa() {

  function handleClick(){
    window.location.assign("https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx");}

  return (
    <div className="container">
      <div className="gb_home">
        <div className="card">
          <div className="gb_logo">
            <div className="circle"></div>
            <h1>SSA</h1>
          </div>
          <div className="info">
            <h3 className="title">Sukanya Samridhi Account</h3>
            <h5><strong>Type - </strong>Saving Account </h5>
            <h5><strong>Maturity Period - </strong>21years</h5>
            <h5><strong>Max.Deposit Limit im 1 year</strong> - 1.5 lakh</h5>
            <h5><strong>Min.Deposit in 1 year-</strong>Rs.1000</h5>
            <h5><strong>Min. Amount for Opening-</strong>Rs.250</h5>
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


export default Ssa;