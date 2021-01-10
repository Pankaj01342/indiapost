import React from 'react';
import './Footer.css';

function Footer(){

    function postInfo(){
    	window.location.assign("https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx");
    }

	return(
        <div className="footer">
           <h3>PostInfo..</h3>
           <div className="item">
              <ul className="item">
                <li>Track Consignment</li>
                <li>Calculate Postages</li>
              </ul>
              <ul className="item">
                <li>Find Pincode</li>
                <li>Locate Post Office</li>
              </ul>
           </div>
           <button className="ft_btn" onClick={postInfo.bind()}>PostInfo</button>
        </div>
	);
}

export default Footer;