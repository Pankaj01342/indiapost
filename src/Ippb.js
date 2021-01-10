import React from 'react';
import './glb.css';

function Ippb() {

  function handleClick(){
    window.location.assign("https://www.ippbonline.com/");}

  return (
  	<div className="container">
  	  <div className="gb_home">
  	    <div className="card">
  	      <div className="gb_logo">
  	        <div className="circle"></div>
            <h1>Ippb</h1>
          </div>
          <div className="info">
            <h3 className="title">India Post Payment Bank</h3>
            <h5><strong>Type - </strong>Digital Saving Account </h5>
            <h5><strong>Limit</strong> - 1 lakh</h5>
            <h5><strong>Downlod from-</strong>PlayStore</h5>
            <h5><strong>Min. Amount for Opening-</strong>Rs.100</h5>
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


export default Ippb;