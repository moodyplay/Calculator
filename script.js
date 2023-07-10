const equalsEl = document.getElementById("equals-el");
let btnEl = document.getElementById("btn-el");
equalsEl.textContent = "piesek";

btnEl.addEventListener("click", btnclk);
console.log(btnEl.value)
function btnclk(){
console.log(btnEl.value);
}