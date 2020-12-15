import React from "react";
import LINKS from "../content/navbarLinks.json";

const Footer = () => {
  return (
    <div id="footer">
      <div className="row no-gutters py-3">
        <div className="col-10 offset-1">
          <div>
            <ul className="navbar-nav">
              {LINKS.map((item, index) => (
                <li
                  className="nav-item"
                  key={"footer-link-" + item.name + "-" + { index }}>
                  <a className="nav-link py-0" href={item.url}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <small className="text-muted">&#169; Copyright 2020</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
