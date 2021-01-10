import React from 'react';
import './glb.css';

function PostalIn() {

  function handleClick(){
    window.location.assign("http://www.postallifeinsurance.gov.in/");}

  return (
    <div className="container">
      <div className="gb_home">
        <div className="card">
          <div className="gb_logo">
            <div className="circle"></div>
            <h1>PLI</h1>
          </div>
          <div className="info">
            <h3 className="title">Postal Insurance</h3>
            <h5><strong>Type - </strong>Two</h5>
            <h5><strong>Type 1 - </strong>Postal Life Insurance(PLI)</h5>
            <h5><strong>Type 2 - </strong>Rural Postal Life Insurance(RPLI)</h5>
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


export default PostalIn;