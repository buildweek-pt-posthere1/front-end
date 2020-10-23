import React from "react";
import "../About.css";
import Orlando from "../images/teamImages/Orlando Rivera Frontend Dev.jpg";
import Erick from "../images/teamImages/Erick Villegaz Frontend Dev.jpg";
import Jonathan from "../images/teamImages/Jonathan Portillo Frontend Dev.jpg";
import Peter from "../images/teamImages/Peter Idehen Marketing.png";
import Anthony from "../images/teamImages/Anthony J Feola backend dev.png";
import Romeo from "../images/teamImages/Romeo Xu Backend Dev.jpg";
import Kevin from "../images/teamImages/Kevin Liu Backend Dev.png";
import Terrence from "../images/teamImages/Terrence Bosco Backend Dev.png";
import Rakh from "../images/teamImages/Rakh Mantore Backend Dev.png";

const AboutUs = () => {
  return (
    <div class="container">
      <div class="infoCards">
        <div class="card">
          <img src={Orlando} alt="" />
          <div class="cardtext">
            <h2>Orlando Rivera</h2>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div class="card">
          <img src={Erick} alt="" />
          <div class="cardtext">
            <h2>Erick Villegaz</h2>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div class="card">
          <img src={Jonathan} alt="" />
          <div className="cardtext">
            <h2>Jonathan Portillo</h2>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div className="card">
          <img src={Peter} alt="" />
          <div className="cardtext">
            <h2>Peter Idehen</h2>
            <h3>Marketing</h3>
          </div>
        </div>
        <div className="card">
          <img src={Anthony} alt="" />
          <div className="cardtext">
            <h2>Anthony J Feola</h2>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <div className="card">
          <img src={Romeo} alt="" />
          <div className="cardtext">
            <h2>Romeo Xu</h2>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <div className="card">
          <img src={Kevin} alt="" />
          <div className="cardtext">
            <h2>Kevin Liu</h2>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <div className="card">
          <img src={Terrence} alt="" />
          <div className="cardtext">
            <h2>Terrence Bosco</h2>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <div className="card">
          <img src={Rakh} alt="" />
          <div className="cardtext">
            <h2>Rakh Mantore</h2>
            <h3>Backend Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
