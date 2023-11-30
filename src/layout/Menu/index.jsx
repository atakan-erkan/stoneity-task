import React from "react";
import MenuCSS from "./menu.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Menu({ toggleDropdown }) {
  return (
    <div className={MenuCSS.menu}>
      <div className={MenuCSS.menuItem}>
        <a href="/#" onClick={toggleDropdown}>
          GÖZ AT <IoMdArrowDropdown />
        </a>
      </div>
      <div className={MenuCSS.menuItem}>
        <a href="/#">MARKALAR</a>
      </div>
      <div className={MenuCSS.menuItem}>
        <a href="/#">EN İYİLER</a>
      </div>
    </div>
  );
}
