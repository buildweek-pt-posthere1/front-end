import React from "react";
import { Button } from "@material-ui/core";
import "../index.css";

const Footer = () => {
  return (
    <footer>
      <div className="widetext first hide">
        <p>
          Exercitation Lorem cillum officia est sunt. Voluptate pariatur
          excepteur culpa ullamco dolore velit. Velit fugiat esse eu cillum ex
          voluptate ad laborum deserunt nisi veniam.
        </p>
        <div className="socialIcons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-reddit"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
      <div className="middletext">
        <h5>This is a title</h5>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Log In</a>
          </li>
        </ul>
      </div>
      <div className="middletext hide">
        <h5>This is a title</h5>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Log In</a>
          </li>
        </ul>
      </div>
      <div className="widetext last hide">
        <h5>Newsletter</h5>
        <p>
          Exercitation Lorem cillum officia est sunt. Voluptate pariatur
          excepteur culpa ullamco dolore velit. Velit fugiat esse eu cillum ex
          voluptate ad laborum deserunt nisi veniam.
        </p>
        <div className="newsletter">
          <input type="text"></input>
          <Button variant="contained" color="primary">
            Join Now
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
