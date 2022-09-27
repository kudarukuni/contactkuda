import React from "react";
import './App.css';

export default function App() {  
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
            <p class="red-text-shadow"><b>👋 ABOUT KUDA !! 👋</b></p>
        </div>
        <div className="totalWaves">
          <details>
            <summary>
              <b>Description</b>
            </summary>
          </details>
        </div>
        <div className="bio">
          <font color="white">
          I am KUDA RUKUNI and I have worked on a number of IoT projects for some of the biggest and top IoT companies in Africa.<br/><br/>+263782516263<br/><br/>krukuni@gmail.com
          </font>
        </div>
        <button class="custom-btn waveButton">
          <span>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <b>
              <a href="tel:+263782516263" target="_blank">
                <font color = "black">CALL KUDA NOW!!</font>
              </a>
            </b>
          </span>
        </button>
        <button class="custom-btn waveButton">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <b>
            <a href="mailto:krukuni@gmail.com" target="_blank">
              <font color = "black">SEND EMAIL!!</font>
            </a>
          </b>
        </button>
      </div>
    </div>
  );
}