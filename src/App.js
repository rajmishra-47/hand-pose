import './CSS/App.css';

import { useRef, useState } from 'react';
import * as fp from "fingerpose"
// import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";

import { drawHand } from './utilities';

function App() {
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
        // console.log(hand);
      
          //..................................................................//
          //GESTURE DETECTION MODEL START
          //..................................................................//

            //NEW DESCRIPTION OF MODEL


                //Handsign A example
                const handSignA = new fp.GestureDescription('A');

                handSignA.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl,1.0);
                handSignA.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

                  //variaion 
                  handSignA.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9);

                for(let finger of [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                  handSignA.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
                }


            //detection for any gestures
            if(hand.length>0){
              const GE = new fp.GestureEstimator([
                fp.Gestures.VictoryGesture,
                // fp.Gestures.ThumbsUpGesture,
                handSignA
              ])
              

              const gesture = await GE.estimate(hand[0].landmarks, 9);

              console.log(gesture);

              if(gesture.gestures !== undefined && gesture.gestures.length > 0){
                console.log(gesture.gestures[0].name);
                setGest(gesture.gestures[0].name);
              }
              else{
                setGest("Invalid Gesture");
              }
              
            }
            else{
              setGest("Invalid Gesture");
            }
          
          //..................................................................//
          //GESTURE DETECTION MODEL END
          //..................................................................//

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
    <div className="App">
      <header className="App-header" />

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

export default App;
