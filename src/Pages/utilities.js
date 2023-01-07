// Points
const fingerjoints= {
    thumb:[0, 1 , 2 , 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9 ,10 ,11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]

}


//Drawing fucntion

export const drawHand = (predictions, ctx) => {
    //check if we have a prediction
    if(predictions && predictions.length > 0) {
        //loop through each prediction

        predictions.forEach((prediction) => {
            //Grab landmarks
            const landmarks = prediction.landmarks;
            
            //loop through fingers and draw them
            for(let j=0;j<Object.keys(fingerjoints).length;j++){
                //loop through points of fingers

                let finger=Object.keys(fingerjoints)[j];

                for(let k=0;k<fingerjoints[finger].length-1;k++){
                    //Get pair of joints
                    const firstJoint=fingerjoints[finger][k];
                    const secondJoint=fingerjoints[finger][k+1];


                    //Draw path for the joints
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJoint][0],
                        landmarks[firstJoint][1]
                    );

                    ctx.lineTo(
                        landmarks[secondJoint][0],
                        landmarks[secondJoint][1]
                    );

                    ctx.strokeStyle = 'green';
                    ctx.lineWidth = 5;
                    ctx.stroke();
                }
            }


            //lo0p the landmarks
            for(let i = 0; i < landmarks.length; i++) {
                //get x-axis point
                    const x= landmarks[i][0];
                
                    //get y-axis point
                    const y= landmarks[i][1];
                    
                //start drawting the landmarks
                    ctx.beginPath();
                    ctx.arc(x,y,5,0,3*Math.PI);

                //set line color
                    ctx.fillStyle = "indigo";
                    ctx.fill();
            }
        })
    }
}