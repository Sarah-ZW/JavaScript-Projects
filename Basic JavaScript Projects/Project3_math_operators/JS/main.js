function addNum(num1, num2) {
    x = num1 + num2;
    document.getElementById("math").innerHTML = x;//adds two numbers
}

function subtract(n1, n2) {
    y = n1 - n2;
    document.getElementById("minus").innerHTML = y;//subracts two numbers
}

function mult() {
    m = 8 * 6;
    document.getElementById("product").innerHTML = "8 times 6 =" + m;//multiplies two numbers
}

function div() {
    u = 50/5;
    document.getElementById("divy").innerHTML = "50 divided by 5 ="+ u;//divides two numbers
}
function lots() {
    e = (50-3)/(4*5)
   document.getElementById("fn").innerHTML = "The answer to 50 - 3 then divided by the product of 4 * 5 =" + e;
} //multiple operators being used

function amp() {
    v = 8%3;
    document.getElementById("left").innerHTML = "The remainder of 8 divided by 3 is " + v;
}//finding the remainder with the modulator

function negate() {
    g = 15;
    document.getElementById("neg").innerHTML = -g;
}//making a number negative with an unary operator

var water = 20;
water++;
document.write("Incrementing 1 starting with 20<br>")//increment
document.write(water);

window.alert(Math.random()*100);//pops up a random number on page load

document.getElementById("math1").innerHTML = Math.E;//math function

var d = 17;
d--;
document.write("<br>Decrementing 1 starting with 17<br>")//decrement
document.write(d);
