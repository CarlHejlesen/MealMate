'use strict'; //Set the entire html5.js to strict mode

//IMPORTS
import {Html5QrcodeScanner} from "html5-qrcode"
import {Html5Qrcode} from "html5-qrcode"

//CONST
const ctx = canvas.getContext('2d');  //.getContext method sets the context of the "canvas" HTML, in this case, it's used to make the canvas 2D
const qrCodeReader = new Html5Qrcode('reader'); //Assigns a new instance of Html5Qrcode to qrCodeReader. "new" is required because Html5Qrcode is already defined in Modules
const video = document.createElement('video');  //Creates HTML "video" element" - Typically used for video input, files, cam etc.
const canvas = document.createElement('canvas');  //Creates HTML "canvas" element"  - Typically used for drawing, generating and programming a canvas

//EVENTLISTENERS
document.getElementById('startButton').addEventListener('click', () => {
  startCamera();
});

//FUNCTIONS
function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  alert(`Code matched = ${decodedText}`);
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  