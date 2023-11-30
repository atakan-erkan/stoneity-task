import React from "react";
import NavbarCSS from "./navbar.module.css";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className={NavbarCSS.navbar}>
      <div className={`${NavbarCSS.navbarNav} ${NavbarCSS.navbarBrand}`}>
        <a href="/">
          <b>COSMO</b>RATE
        </a>
      </div>
      <div className={`${NavbarCSS.navbarSearch}  ${NavbarCSS.navbarNav}`}>
        <button className={NavbarCSS.navbarSearchBtn}>
          <FiSearch />
        </button>
        <input type="text" placeholder="Ürün, marka veya kategori ara" />
      </div>
      <div className={`${NavbarCSS.navbarLogin} ${NavbarCSS.navbarNav}`}>
        <a href="/#" className={NavbarCSS.navbarLink}>
          Kayıt Ol
        </a>
        <a href="/#" className={NavbarCSS.navbarLink}>
          Giriş Yap
        </a>
      </div>
    </div>
  );
}
