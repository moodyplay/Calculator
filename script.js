const equalsEl = document.getElementById("equals-el");
const buttonsEl = document.querySelectorAll(".calc-button:not(.not)");
const equalsBtn = document.getElementById("btnCalculate")

let screenValue = ""
const btnClearEl = document.getElementById("btnClear")
const btnDelEl = document.getElementById("btnDel")
const isAlphaNumeric = /^[a-zA-Z0-9]+$/;

function updateScreen(){
    equalsEl.textContent = screenValue;
}
document.addEventListener("DOMContentLoaded", function() {
  
  
  // Ustawienie animacji powitania po 1 sekundzie
  setTimeout(function() {
    equalsEl.classList.add("show");
    
    setTimeout(function() {
      equalsEl.classList.remove("show");
      setTimeout(function() {
        equalsEl.classList.add("show");
        
        screenValue = "0";
        updateScreen();
      }, 1000);
    }, 1000); // Opóźnienie 1000 ms (1 sekunda) między dodaniem i usunięciem klasy "show"
  }, 1000); // Opóźnienie 1000 ms (1 sekunda) przed dodaniem klasy "show"
  
});


for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", function(){
        let num = buttonsEl[i].textContent;
        console.log(num);
        screenValue += num;
        updateScreen();
        console.log(screenValue)
    });
}
equalsBtn.addEventListener("click", function(){
    if (screenValue !== "") {
        try {
          screenValue = eval(screenValue).toString();
      if (screenValue === "Infinity") {
        screenValue = "Nie dziel przez zero";
          }
          updateScreen();
        } catch (error) {
          screenValue = "Błąd";
          updateScreen();
        }
      }
})
btnClearEl.addEventListener("click", function(){
  screenValue = "0";
  updateScreen();
  screenValue = "";
})
btnDelEl.addEventListener("click", function(){
  if(screenValue.length > 1 && isAlphaNumeric.test(screenValue) ){
    screenValue = screenValue.slice(0, -1); 
    
    updateScreen();
  }else {
    screenValue = "0";
    updateScreen();
    screenValue = "";
  }
})

const handleOnMouseMove = e => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
  x = e.clientX - rect.left,
  y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".calc-button")) {
  card.onmousemove = e => handleOnMouseMove(e);
}

function isSmartphoneDevice() {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

if (isSmartphoneDevice()) {
  var elements = document.getElementsByClassName("calc-button");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("smartphone");
  }
}

