import React from "react";
import Navbar from "./Navbar/index";
import Submenu from "./Submenu/index";
import Topbar from "./Topbar/index";
import "../../styles/header/header.css"

function Header() {
  return (
    <header className="header">
      <Topbar/>
      <Navbar/>
      <Submenu/>
    </header>
  );
}

export default Header;
