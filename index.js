var number1=Math.random();
number1*=6;
number1=Math.floor(number1)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+number1+".png");
var number2=Math.random();
number2*=6;
number2=Math.floor(number2)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+number2+".png");    
if(number1>number2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(number1<number2){
    document.querySelector("h1").textContent="Player 2 Wins!";  
}
else{
    document.querySelector("h1").textContent="Draw!";
}


