import React from "react";
import './App.css';

export default function App() {  
  return (
    <div className="mainContainer">
      <div className="dataContainer">    
        <div className="header">
            <p class="red-text-shadow"><strong><b><font color="#12BDF3" size="8"><u>ABOUT KUDA</u></font></b></strong></p>
        </div>        
        
        <div className="bio">
          <p align="center"><b><font color="silver">Description</font></b></p>
        </div>   
    
        <div className="totalWaves">
          <font color="white">Hi, 👋 I am Kuda Rukuni and I am a Full Stack IoT, Web3.0 and Software Engineer. 
            I have worked on a number of IoT projects for some of the biggest and top IoT companies in Africa.
            <br/><br/><br/>
            For more information and booking please call me on this number </font><a href="tel:+263782516263" target="_blank">            
            <font color="gold">+263 782 51 6263</font></a><font color="white"> and if you prefer to communicate via email, please feel free to send mail to this address </font> 
            <a href="mailto:krukuni@gmail.com" target="_blank"><font color="gold">krukuni@gmail.com</font></a><font color="white">.
            <br/><br/><br/>
            I am readily and always available for all discussions. And please do not hesitate to hit the</font><font color="#075e54"><a href="https://api.whatsapp.com/send/?phone=263782516263&text&type=phone_number&app_absent=0" target="_blank"> WhatsApp</a></font><font color="white"> button 
            on the bottom right of your screen to start a conversation on my favourite Messenger Application.
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
