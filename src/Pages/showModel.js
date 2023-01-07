import '../CSS/App.css';

import { useRef, useState } from 'react';
import * as fp from "fingerpose"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam";
import { drawHand } from './utilities';
import '@tensorflow/tfjs-backend-webgl';
import {handsigns} from'../Models/SignLanguage'


function Model() {
  const webcamRef =useRef(null);
  const canvasRef =useRef(null);

  const [gest,setGest] = useState(null);

  const runHandpose = async () =>{
    const net = await handpose.load();

    setInterval(() =>{
      detect(net)
    },[100]);
  };

  const detect = async (net) => {
      // checkin data
    if(
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
      
      //get video properties
        const video = webcamRef.current.video;
        const videoWidth =webcamRef.current.video.videoWidth;
        const videoHeight =webcamRef.current.video.videoHeight;  

      //set video height and width
        webcamRef.current.width = videoWidth;
        webcamRef.current.height = videoHeight;
      
      //set canvas height and width
        canvasRef.current.height = videoHeight;
        canvasRef.current.width = videoWidth;
      
      //Make detection
        const hand =await net.estimateHands(video);

            //detection for any gestures
            if(hand.length>0){
              const GE = new fp.GestureEstimator([
                // handsigns.handSign2,
                // handsigns.handSign3,
                handsigns.handSignA,
                handsigns.handSignB,
                handsigns.handSignC,
                handsigns.handSignD
              ])
              

              const gesture = await GE.estimate(hand[0].landmarks, 4.3);

              console.log(gesture);

              if(gesture.gestures !== undefined && gesture.gestures.length > 0){
                let maxi=0;
                let index=0;
                for(let i=0; i<gesture.gestures.length;i++){
                    maxi=Math.max(maxi,gesture.gestures[i].score);
                    if(maxi===gesture.gestures[i].score){
                        index = i ;
                    }
                }
                console.log(index);
                
                setGest(gesture.gestures[index].name);
                console.log(gest);
                }
                else{
                    setGest("Invalid Gesture");
                  }
              
            }
            else{
              setGest("Invalid Gesture");
            }
          

      //Draw Mesh 
      if(hand.length>0){
        const ctx = canvasRef.current.getContext('2d');
        console.log("drawing mesh")
        drawHand(hand, ctx);
      }
    } 
  }

  runHandpose();

  return (
    <div className="showModel">

      <Webcam  ref={webcamRef} style={{
        position: "absolute",
        margin:"auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width : 640,
        height : 480,
      }} />

      <canvas ref={canvasRef} style={{
        position: "absolute",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width : 640,
        height : 480,  
      }} />

      <div>
        <h3>Prediction</h3>
        <p>{gest}</p>
      </div>
    </div>
  );
}

export default Model;
