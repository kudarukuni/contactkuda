import React from "react";
import './App.css';

export default function App() {  
  return (
    <div className="mainContainer">
      <div className="dataContainer">    
        <div className="header">
            <p class="red-text-shadow"><strong>ABOUT KUDA</strong></p>
        </div>        
        
        <div className="totalWaves">
          <p align="center"><b><font color="gold">Description</font></b></p>
        </div>   
    
        <div className="bio">
          <font color="white">Hi, 👋 I am Kuda Rukuni and I am a Full Stack IoT, Web3.0 and Software Engineer. 
            I have worked on a number of IoT projects for some of the biggest and top IoT companies in Africa.
            <br/><br/><br>
            For more information and booking please call me on this number <a href="tel:+263782516263" target="_blank"><strong></font><font color="gold">+263 782 51 6263</font><font color="white"></a> and if you 
            prefer to communicate via email, please feel free to send mail to this address <a href="mailto:krukuni@gmail.com" target="_blank"><strong></font><font color="gold">krukuni@gmail.com</font><font color="white">.</a>
            <br/><br/><br>
            I am readily and always available for all discussions. And please do not hesitate to hit the</font><font color="#075e54"> WhatsApp</font><font color="white"> button on the bottom right of your screen 
            to start a conversation on WhatsApp.
          </font>          
          <p align="center">
            <a href="https://kudarukuni-kudarukuni.vercel.app" target="_blank" class="button">Desktop Site</a>
            <a href="https://cvtemp-kudarukuni.vercel.app" target="_blank" class="button">Mobile Site</a>
          </p>
        </div>
    
      </div>
    </div>
  );
}
