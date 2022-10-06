import "./Footer.css";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <ul>
          <li>
            <a href="">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
