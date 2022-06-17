import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  position: relative; 
  top: 3px;
  right: -20px;
  width: 175px;
  height: 50px;
  cursor: pointer;
`

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to= "/">
                <Logo onClick="/" src= "https://res.cloudinary.com/dgb2lnz2i/image/upload/v1650882286/ADMIN_LOGO_enuqfp.png"  />
                </Link>
        </div>
      </div>
    </div>
  );
}
