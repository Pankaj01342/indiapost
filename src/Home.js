import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" alt="" src="https://images.pexels.com/photos/281962/pexels-photo-281962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <div className="home_row">
          <Product 
            image="https://knnindia.co.in/uploads/newsfiles/IPPB-31-8-18.jpg"
            info = "Information"
            link = "ippb"
          />
          <Product 
            image="http://ww1.prweb.com/prfiles/2013/09/04/11091987/Post_logo_w_tag.jpg"
            info = "Information"
            link = "postal_insurance"
          />
        </div>
        <div className="home_row">
          <Product 
            image="https://devcom975.files.wordpress.com/2016/04/india-post-sukanya-samriddhi-account-new-saving-scheme-for-girl-child.png"
            info = "Information"
            link = "/ssa"
          />
          <Product 
            image="https://tse4.mm.bing.net/th?id=OIP.gOE1BIlvJzXdkuSF3hs_sQHaHG&pid=Api&P=0&w=187&h=180"
            info = "Information"
            link = "/sb"
          />
          <Product 
            image="https://tse3.explicit.bing.net/th?id=OIP.zIkhrCR2veVHKqP3ajirsgHaEK&pid=Api&P=0&w=367&h=207"
            info = "Information"
            link = "/mis"
          />
        </div>
        <div className="home_row">
          <Product 
            image="https://www.thehitavada.com/Encyc/2020/12/16/2_08_37_53_DakPay_1_H@@IGHT_489_W@@IDTH_868.jpg"
            info = "Information"
            link = "/dakpay"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;