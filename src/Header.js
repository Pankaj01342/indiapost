import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {

  function handleClick(){
    const nav_links = document.querySelector(".nav_links");
    nav_links.classList.toggle("open");
  }

  function google(){
    window.location.assign("https://www.google.com");}
   
  function youtube(){
    window.location.assign("https://www.youtube.com");}
  
  function cricbuzz(){
    window.location.assign("https://www.cricbuzz.com");}

  function sarkariResult(){
    window.location.assign("https://www.sarkariresult.com");}

  return (
    <div>
      <div className="header">
        <Link to = '/'>
        <img className="header_logo logo" src="http://2.bp.blogspot.com/-3a7iMhpW5T8/Vg84-GHzZ4I/AAAAAAAAIU8/ZmLvzCQnwIw/s1600/India%2BPost%2BLOGO.jpg" alt=""/>
        </Link>
        <div className="hamburger" onClick={handleClick.bind()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav_links">
          <li onClick={google.bind()}>Google</li>
          <li onClick={youtube.bind()}>Youtube</li>
          <li onClick={cricbuzz.bind()}>Cricbuzz</li>
          <li onClick={sarkariResult.bind()}>Sarkari Result</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
