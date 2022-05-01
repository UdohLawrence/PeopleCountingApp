let count = 0;
//console.log(count);
//let countEl = document.getElementById("count-el");
let sum = 0;
let message = " - "

function increment(){
  count += 1;
  document.getElementById("count-el").textContent = count;
  // // //console.log(count);
  // //console.log("button has been clicked")
}
function save(){
  sum += count;
  document.getElementById("prev-el").textContent += (sum + message);
  count = 0;
  document.getElementById("count-el").textContent = count;
  sum = 0;
}