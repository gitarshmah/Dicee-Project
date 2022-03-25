var randomnumber1 = Math.floor(Math.random()*6 + 1);
var randomnumber2 = Math.floor(Math.random()*6 + 1);
var x = "images/"+"dice"+randomnumber1+".png";

var y = "images/"+"dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", x);
document.querySelectorAll("img")[1].setAttribute("src", y);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}