import React from "react";
import HeaderCSS from "./header.module.css";
import FirstHeader from "../../assets/images/Group-201-min-1.png";
import SecondHeader from "../../assets/images/banner.jpg";
export default function Header() {
  return (
    <div className={HeaderCSS.header}>
      <div className={HeaderCSS.headerImage}>
        <img src={FirstHeader} alt="FirstHeader" />
      </div>
      <div className={HeaderCSS.headerImage}>
        <img src={SecondHeader} alt="SecondHeader" />
      </div>
    </div>
  );
}
