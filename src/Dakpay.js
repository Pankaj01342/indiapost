import React from 'react';
import './glb.css';

function Dakpay() {

  function handleClick(){
    window.location.assign("https://www.ippbonline.com/");}

  return (
    <div className="container">
      <div className="gb_home">
        <div className="card">
          <div className="gb_logo">
            <div className="circle"></div>
            <h1>Dakpay</h1>
          </div>
          <div className="info">
            <h3 className="title">Dakpay</h3>
            <h5><strong>Type - </strong>Digital Pay App</h5>
            <h5><strong>Download from-</strong>PlayStore</h5>
            <h5>DakPay is a safe, easy and reliable payments app that allows you to use BHIM UPI to make payments using your mobile phone. Using the DakPay App, you can make instant money transfers with UPI and also make instant payments at your favorite offline and online stores</h5>
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


export default Dakpay;