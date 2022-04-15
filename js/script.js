var elMoney = document.querySelector("#money");
var elTime = document.querySelector("#time");
var elMood = document.querySelector("#mood");
var elReys = document.querySelector("#reys");
var elSick = document.querySelector("#sick");
var elBtn = document.querySelector("#submit");
var elOutput = document.querySelector(".output");
var outputText = document.querySelector(".output-text");
var imgDiv = document.querySelector(".img-div");
var img = document.createElement("img");
imgDiv.append(img);
img.style.width = "100%";



elBtn.addEventListener("click", (e) => {
  e.preventDefault();
  outputText.style.display = "block"
  var money = elMoney.checked;
  var time = elTime.checked;
  var mood = elMood.checked;
  var reys = elReys.checked;
  var sick = elSick.checked;

  if ((!money && time && mood && !sick) || (sick && !money && mood && !reys)) {
    outputText.textContent = "Urra!! Sayohatga boramiz😀";
    img.src = "./img/go.jpg";
  }
  else if (!money && !time && !mood && !reys && !sick) {
    outputText.textContent = "Urra!! Sayohatga boramiz😀";
    img.src = "./img/go.jpg";
  }
  else{
    outputText.textContent = "Afsus, sayohatga bora olmaymiz😥"
    img.src = "./img/sad.jpg";
  }
})
