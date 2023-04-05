'use strict'; //Set the entire html5.js to strict mode

const video = document.createElement('video');  //Creates HTML "video" element" - Typically used for video input, files, cam etc.
const canvas = document.createElement('canvas');  //Creates HTML "canvas" element"  - Typically used for drawing, generating and programming a canvas
const ctx = canvas.getContext('2d');  //.getContext method sets the context of the "canvas" HTML, in this case, it's used to make the canvas 2D


const qrCodeReader = new Html5Qrcode('reader'); //Assigns a new instance of Html5Qrcode to qrCodeReader. "new" is required because Html5Qrcode is already defined in Modules

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })  //"navigator" object is JS native, mediaDevices method is a reference to collect the media in the browser, cam, mic etc. "getUserMedia({ video: true })" is used for requesting access by the user.
    .then((stream) => {                                 //Promise from getUserMedia(), the response object is a MediaStream object, which goes into parameter "stream", where the response is the users camera
      video.srcObject = stream;                         //Set the source for "video" to "stream"
      video.play();                                     //Starts video, which has users camera as input
      requestAnimationFrame(tick);                      //requestAnimationFrame is JS native code, that takes a callback function as input. requestAnimationFrame() executes synchronously with the browser animation loop 
    })
    .catch((err) => console.error('Unable to get access to camera', err));  //Unresolved promise from navigator... has error code transfered to (err)
}

function tick() {                                       //Callback function as argument for requestAnimationFrame
  canvas.width = video.videoWidth;                    
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);  //Draws the video onto canvas

  qrCodeReader.scan((result) => {                           //Html5QrCode method
    console.log(`QR Code detected: ${result}`);
  });

  requestAnimationFrame(tick);
}

document.getElementById('startButton').addEventListener('click', () => {
  startCamera();
});
