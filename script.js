const equalsEl = document.getElementById("equals-el");

let buttonsEl = document.querySelectorAll(".calc-button:not(.not)");
let equalsBtn = document.getElementById("btnCalculate")
equalsEl.textContent = "0";
let screenValue = ""
let btnClearEl = document.getElementById("btnClear")
let btnDelEl = document.getElementById("btnDel")




// buttonsEl.addEventListener("click", function(){
//     let num = buttonsEl.textContent;
//     console.log(buttonsEl[num]);
//     console.log("dziaa")
// });


// buttonsEl.array.forEach(element => {
//     element.addEventListener("click", btnclk);
// });

function updateScreen(){
    equalsEl.textContent = screenValue;
}



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
          const result = eval(screenValue);
          screenValue = result;
          screenValue = screenValue.toString();
          console.log(typeof screenValue)
          if(screenValue=="Infinity"){
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
  console.log(screenValue)
  if(screenValue.length > 1){
    let newscreenValue = screenValue.slice(0, -1); 
    screenValue = newscreenValue;
    updateScreen();
  }else if (screenValue.length = 1){
    screenValue = "0";
    updateScreen();
    screenValue = "";
  }
  console.log(screenValue)
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