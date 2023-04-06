const scanner = new Html5QrcodeScanner("reader",{
  qrbox:{
    width: 250,
    height: 250
  },
  fps: 20
},false);
scanner.render(success, error);

function success(text, result) {
  const reader = document.getElementById('reader');
  const h2 = document.createElement('h2');
  const p2 = document.createElement('p');
  const p = document.createElement('p');
  const a = document.createElement('a');

  h2.textContent = 'Success!';
  p2.textContent = text;
  console.log(result);
  a.href = result;
  a.textContent = result;
  p.appendChild(a);

  document.body.appendChild(h2);
  document.body.appendChild(p);
  document.body.appendChild(p2);

  scanner.clear();
  reader.remove();
}

function error(result) {
  console.warn(result);
}

//You can set up the scanner as follows:

// function onScanSuccess(decodedText, decodedResult) {
//   // handle the scanned code as you like, for example:
//   console.log(`Code matched = ${decodedText}`, decodedResult);
// }

// function onScanFailure(error) {
//   // handle scan failure, usually better to ignore and keep scanning.
//   // for example:
//   console.warn(`Code scan error = ${error}`);
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "reader",
//   { fps: 10, qrbox: {width: 250, height: 250} },
//   /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);
