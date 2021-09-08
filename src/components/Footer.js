import React from "react";

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <div className="container-fluid content-row mt-5">
      <div className="row">
        <h1 style={{ paddingLeft: "40%", fontSize: "50px" }}>
          <i className="far fa-comments fa-1x"></i> Reach us
        </h1>

        <div className="row mt-4 mb-5" style={{ paddingLeft: "20%" }}>
          <div className="col col-lg-1.2">
            <a
              href="https://www.linkedin.com/in/ayush-nemmaniwar-30a32617b/"
              target="_blank"
            >
              <IconContext.Provider
                value={{ color: "blue",size:"50", className: "global-className-name" }}
              >
                <div>
                  <AiFillLinkedin/>
                </div>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col col-lg-1.2">
            <a href="https://github.com/ayushnemmaniwar" target="_blank">
            <IconContext.Provider
                value={{ color: "black",size:"50", className: "global-className-name" }}
              >
                <div>
                  <AiFillGithub/>
                </div>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col col-lg-1.2">
            <a href="https://www.facebook.com/ayush.nemmaniwar" target="_blank">
              <IconContext.Provider
                value={{ color: "blue",size:"50", className: "global-className-name" }}
              >
                <div>
                  <AiFillFacebook/>
                </div>
              </IconContext.Provider>
            </a>
          </div>
          
          <div className="col col-lg-1.2">
            <a
              href="https://www.instagram.com/ayush_rao_nemmaniwar/"
              target="_blank"
            >
              <IconContext.Provider
                value={{ color: "red",size:"50", className: "global-className-name" }}
              >
                <div>
                  <AiOutlineInstagram/>
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
