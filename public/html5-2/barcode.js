const scanner = new Html5Qrcode("scanner");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

function isEAN13Valid(decodedText) {
  return /^\d{13}$/.test(decodedText);
}

function onScanSuccess(decodedText, decodedResult) {
  console.log("Decoded text:", decodedText);
}

function onScanFailure(error) {
  if (typeof error === 'string' && isEAN13Valid(error)) {
    console.log("Decoded text (from error):", error);
  } else {
    console.error("Error scanning:", error);
  }
}

startButton.addEventListener("click", () => {
  scanner.start(
    { facingMode: "environment" },
    onScanSuccess,
    onScanFailure,
    { formatsToSupport: ["ean_13"] }
  )
  .catch((error) => {
    console.error("Error starting scanner:", error);
  });
});

stopButton.addEventListener("click", () => {
  scanner.stop()
    .then(() => {
      console.log("Scanner stopped");
    })
    .catch((error) => {
      console.error("Error stopping scanner:", error);
    });
});