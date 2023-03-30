//CONSTANT DECLERATIONS
const startscanning = document.getElementById("start_scanning");

//EVENT LISTENERS
startscanning.addEventListener('click', async function () {

console.log("Started Scanning")
Quagga.init({
  inputStream : {
      name : "Live",
      type : "LiveStream"
  },
  decoder : {
      readers : ["ean_13"]
  }
}, function(err) {
  if (err) {
      console.log(err);
      return;
  }
  Quagga.start();
});

Quagga.onDetected(function(result) {
  var code = result.codeResult.code;
  console.log("Barcode detected:", code);
  Quagga.stop();
  if(confirm("Scan again?")) {
      Quagga.start();
  }
});
});








