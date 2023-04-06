const scanner = new Html5QrcodeScanner(
  "reader",
  {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 20,
  },
  false
);
scanner.render(success, error);

function success(text, result) {
  const reader = document.getElementById("reader");
  const h2 = document.createElement("h2");
  const p2 = document.createElement("p");
  const p = document.createElement("p");
  const a = document.createElement("a");

  h2.textContent = "Success!";
  p2.textContent = text;
  console.log(result);
  a.href = result;
  a.textContent = result;
  p.appendChild(a);

  document.body.appendChild(h2);
  document.body.appendChild(p2);
  document.body.appendChild(p);
  scanner.clear();
  reader.remove();

  let data = {
    barcode: text,
  };
  fetch("/API/getListGlobalItems", {
    method: "POST", 
    mode: "cors", 
    cache: "no-cache",
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
  
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      JSON(response);
    }
    else{
      throw new Error("response was not in the 200 range ");
    }
  })
  .then(json => {
    console.log(json);
  });
}

function error(result) {
  console.warn(result);
}

/*
        fetch("/API/waisteditem", {                                 //fetches promise from /API/waisteditem, which resolves to the "response" object defined inside the endpoint "/API/waisteditems"
            method: "POST",                                         //waistedButton perfroms a post request to the endpoint
            mode: "cors",                                           //Allows computers not hosting the server to make request to "/API/waisteditem"
            cache: "no-cache",                                      //Prevent cached data from interacting with the request, this ensures the response from "/API/waisteditem" is up to date
            credentials: "same-origin",                             //Ensures that the server never sends cookies, cache etc. unless the request is coming from the same origin meaning, the same domain, port etc.
            headers: {
                "Content-Type": "application/json",                 //Specicies content type, we're sending with the POST request

            },
            redirect: "follow",                                     //If the response object contains code to redirect our page, this ensures we follow the redirect
            referrerPolicy: "no-referrer",                          //Does not scan the users browsing history
            body: JSON.stringify(data),                             //"body" is a POST/PUT specific property which specicies the payload send to the server .JSON.stringify converts the "data" variable into .json string
        }).then((response) => {                                     //The resolved promise from fetch(/API/waisteditem) is stored in "response" parameter
            if (response.ok) {                                      //If response given by fetch("/API/waisteditem") is inside [200:299] range,    
                removeItems();                                      //Executes removeItems() function
            }
        })
    })
    */
