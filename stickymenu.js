import React from "react";
import "./StickyMenu.css";

const StickyMenu = () => {
  return (
    <nav className="sticky-menu">
      <ul className="menu">
        <li><a href="#">Son Dakika</a></li>
        <li><a href="#">Yazarlar</a></li>
        <li className="has-submenu">
          <a href="#">Gündem</a>
          <ul className="submenu">
            <li><a href="#">Siyaset</a></li>
            <li><a href="#">Ekonomi</a></li>
            <li><a href="#">Kültür</a></li>
          </ul>
        </li>
        <li className="has-submenu">
          <a href="#">Spor</a>
          <ul className="submenu">
            <li><a href="#">Futbol</a></li>
            <li><a href="#">Basketbol</a></li>
            <li><a href="#">Voleybol</a></li>
          </ul>
        </li>
        <li><a href="#">Hayat</a></li>
        <li><a href="#">Magazin</a></li>
        <li><a href="#">Finans</a></li>
        <li><a href="#">Resmi İlanlar</a></li>
        <li><a href="#">Gecmiş</a></li>
      </ul>
    </nav>
  );
};

export default StickyMenu;
