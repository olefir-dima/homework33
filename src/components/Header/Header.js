import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <div class="menu-item">
          <Link to="/">Головна</Link>
        </div>
        <div class="menu-item">
          <Link to="/questions">Питання</Link>
        </div>
        <div class="menu-item">
          <Link to="/materials">Матеріали</Link>
        </div>
        <div class="menu-item">
          <Link to="/contacts">Контакти</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
