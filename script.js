const equalsEl = document.getElementById("equals-el");

let buttonsEl = document.querySelectorAll(".calc-button:not(.not)");
let equalsBtn = document.getElementById("btnCalculate")
equalsEl.textContent = "0";
let screenValue = ""



function add(a, b) {
    return a + b;
  }

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
    });
}
equalsBtn.addEventListener("click", function(){
    if (screenValue !== "") {
        try {
          const result = eval(screenValue);
          screenValue = result;
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