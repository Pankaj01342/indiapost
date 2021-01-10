import React from 'react';
import './glb.css';

function Sb() {

  function handleClick(){
    window.location.assign("https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx");}

  return (
    <div className="container">
      <div className="gb_home">
        <div className="card">
          <div className="gb_logo">
            <div className="circle"></div>
            <h1>SB</h1>
          </div>
          <div className="info">
            <h3 className="title">Saving Bank</h3>
            <h5><strong>Type - </strong>Saving Account </h5>
            <h5>Indian Post have many saving scheme like SB,SSA,RD,TD,KVP and many more.</h5>
          </div>
          <div className="foot">
            <p>for detail..</p>
            <button className="gb_btn" onClick={handleClick.bind()}>Click here!</button>
          </div>
        </div>
    </div>
    </div>
    );
}


export default Sb;