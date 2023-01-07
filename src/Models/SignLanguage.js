import * as fp from 'fingerpose';


//..................................................................//
          //GESTURE DETECTION MODEL START
          //..................................................................//

            //NEW DESCRIPTION OF MODEL


            //Handsign A example
                const handSignA = new fp.GestureDescription('A');

                handSignA.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl,1.0);
                handSignA.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
                

                for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSignA.addCurl(finger, fp.FingerCurl.FullCurl,1.0);
                    handSignA.addDirection(finger, fp.FingerDirection.VerticalDown, 1.0);
                }
                //variaion 
                handSignA.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.7);


            //Handsign B example
                const handSignB = new fp.GestureDescription('B');
                for(let finger of [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSignB.addCurl(finger, fp.FingerCurl.NoCurl,1.0);
                    handSignB.addDirection(finger, fp.FingerDirection.VerticallyUp,1.0)
                }

                //variaion 
                for(let finger of [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                handSignB.addDirection(finger, fp.FingerDirection.DiagonalUpLeft,0.9)
                handSignB.addDirection(finger, fp.FingerDirection.DiagonalUpRight,0.9)
                }

            //Handsign C example
                const handSignC = new fp.GestureDescription('C');
                for(let finger of [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSignC.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
                    handSignC.addDirection(finger, fp.FingerDirection.VerticallyUp,1.0)
                }

                //variaion 
                for(let finger of [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSignC.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
                    handSignC.addDirection(finger, fp.FingerDirection.DiagonalUpRight,0.9)
                    handSignC.addDirection(finger, fp.FingerDirection.DiagonalUpLeft,0.9)  
                }

            //Handsign D example
                const handSignD = new fp.GestureDescription('D');

                handSignD.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl,1.0);
                handSignD.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

                handSignD.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl,1.0);
                handSignD.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

                for(let finger of [ fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSignD.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
                    handSignD.addDirection(finger, fp.FingerDirection.VerticalDown,1.0)
                }

                //variaion 
                handSignD.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight,0.7);
                handSignD.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft,0.7);



            //Handsign 2 example
                const handSign2 = new fp.GestureDescription('2');

                handSign2.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl,1.0);
                handSign2.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

                handSign2.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl,1.0);
                handSign2.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

                for(let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
                    handSign2.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
                    handSign2.addDirection(finger, fp.FingerDirection.VerticallyUp,1.0)
                }

                //variaion 
                for(let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
                handSign2.addCurl(finger, fp.FingerCurl.NoCurl, 0.9);
                handSign2.addDirection(finger, fp.FingerDirection.VerticallyUp,0.9)
                }

            //Handsign 3 example
                const handSign3 = new fp.GestureDescription('3');

                handSign3.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl,1.0);
                handSign3.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);

                handSign3.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl,1.0);
                handSign3.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticallyUp, 0.9);

                handSign3.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl,1.0);
                handSign3.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.9);

                for(let finger of [fp.Finger.Thumb, fp.Finger.Pinky]) {
                    handSign3.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
                    handSign3.addDirection(finger, fp.FingerDirection.VerticallyUp,1.0)
                }
                //variaion 
                for(let finger of [fp.Finger.Thumb, fp.Finger.Pinky]) {
                handSign3.addCurl(finger, fp.FingerCurl.NoCurl, 0.9);
                handSign3.addDirection(finger, fp.FingerDirection.VerticallyUp,0.9)
                }

export const handsigns = {
    handSign2,
    handSign3,
    handSignA,
    handSignB,
    handSignC,
    handSignD,
}