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
          <b><font color="gold">Description</font></b>
        </div>    
        <div className="bio">
          <font color="white">Hi, 👋 I am Kuda Rukuni and I am a Full Stack IoT, Web3.0 and Software Engineer. 
            I have worked on a number of IoT projects for some of the biggest and top IoT companies in Africa.
            <br/>For more information and booking please call me on this number <a href="tel:+263782516263" target="_blank"><strong>+263 782 51 6263.</strong></a>
            <br/>Otherwise if you prefer to communicate via email, please feel free to send mail to this address <a href="mailto:krukuni@gmail.com" target="_blank"><strong>krukuni@gmail.com.</strong></a>
            <br/>I am readily available for all discussions and please do not hesitate to hit the WhatsApp button on the bottom right of your screen to start a conversation.
          </font>          
          <p align="center"><a href="kudarukuni-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-desktop" aria-hidden="true">Desktop Site !!</i></a></p>
          <p align="center"><a href="cvtemp-kudarukuni.vercel.app" target="_blank" class="button"><i class="fa fa-mobile" aria-hidden="true">Mobile Site !!</i></a></p>
        </div>
      </div>
    </div>
  );
}
