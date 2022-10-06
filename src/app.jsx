import React from "react";
import './App.css';

export default function App() {  
  return (
    <div className="mainContainer">
      <div className="dataContainer">    
        <div className="header">
            <p class="red-text-shadow"><strong>👋 ABOUT KUDA !! 👋</strong></p>
        </div>        
        <div className="totalWaves">
          <b>Description</b>
        </div>    
        <div className="bio">
          <font color="white">I am KUDA RUKUNI and I have worked on a number of IoT projects for some of the biggest and top IoT companies in Africa.
          <br/><br/>
          <a href="tel:+263782516263" target="_blank"><i class="fa fa-phone" aria-hidden="true"><strong>+263782516263</strong></i></a>
          <br/><br/>
          <a href="mailto:krukuni@gmail.com" target="_blank" class="button"><i class="fa fa-envelope" aria-hidden="true"><strong>krukuni@gmail.com</strong></i></a>
          </font>          
          <p align="center"><a href="kudarukuni-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-desktop" aria-hidden="true">Desktop Site !!</i></a></p>
          <p align="center"><a href="cvtemp-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-mobile" aria-hidden="true">Mobile Site !!</i></a></p>
        </div>
      </div>
    </div>
  );
}
