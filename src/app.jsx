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
          <br/><br/>+263782516263<br/><br/>krukuni@gmail.com</font>
          <p align="center"><a href="tel:+263782516263" target="_blank" class="button"><i class="fa fa-phone" aria-hidden="true">Call Kuda Now !!</i></a></p>
          <p align="center"><a href="mailto:krukuni@gmail.com" target="_blank" class="button"><i class="fa fa-envelope" aria-hidden="true">Send Mail Now !!</i></a></p>
        </div>
    
        <p align="center">          
          <a href="kudarukuni-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-desktop" aria-hidden="true">Desktop Site !!</i></a>
          <a href="cvtemp-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-mobile" aria-hidden="true">Mobile Site !!</i></a>
        </p>
    
      </div>
    </div>
  );
}
