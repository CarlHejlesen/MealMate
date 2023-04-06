const scanner = new Html5QrcodeScanner("reader",{
  qrbox:{
    width: 250,
    height: 250
  },
  fps: 20
});
scanner.render(success, error);

function success(result) {
  const reader = document.getElementById('reader');
  const h2 = document.createElement('h2');
  h2.textContent = 'Success!';
  const p = document.createElement('p');
  const a = document.createElement('a');
  a.href = result;
  a.textContent = result;
  p.appendChild(a);

  while (reader.firstChild) {
    reader.removeChild(reader.firstChild);
  }
  document.body.appendChild(h2);
  document.body.appendChild(p);

  scanner.clear();
  reader.remove();
}

function error(result) {
  setTimeout(() => {
    console.log(error);
  }, 1000);
  
}
