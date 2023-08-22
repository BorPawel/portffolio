import React from "react";
import Image from "next/image";
import myphoto from "../../assets/images/myphoto.png";
import "@styles/header.sass";
import "animate.css";
import Link from "next/link";
import "@styles/arrows/arrows.sass";
import Arrows from "../arrows/Arrows";

const Header = () => {
  return (
    <div className="header">
    
        <div className="my-name">
          <h1>
            <span>Paweł</span> <span>Bornikowski</span>
          </h1>
          <h3>Front-end Developer</h3>
          <p>I will code your interactive world!</p>
          {/* <div className="first-blob"></div> */}
          
        </div>
        <div className="motiv-text ">
          <h3>The only limit is the one you set for yourself</h3>
          <div className="limit">setLimit(Null)</div>
        </div>
 

      <Arrows
        section={"#about"}
        headingText={"Let me introduce myself!"}
        position={"20%"}
      />
    </div>
  );
};
export default Header;
