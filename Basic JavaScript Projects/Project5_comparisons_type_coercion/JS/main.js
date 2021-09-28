document.write(typeof "animal");
document.write("<br>112"+120);
document.write("<br>five"+120);
document.write("<br>"+5+20);
document.write(5+20);
function n() {
    document.getElementById("nano").innerHTML= 0/0;//displays NaN
}
function tru() {
    document.getElementById("1").innerHTML = isNaN("lala");//NaN true
}
function fal() {
    document.getElementById("2").innerHTML = isNaN("452");//NaN false
}
function pinf() {
    document.getElementById("3").innerHTML = (3E510);//infinity
}
function ninf() {
    document.getElementById("4").innerHTML = (-4E620);//negative infinity
}
document.write("<br>False boolean logic:");//false boolean
document.write(5<2);

document.write("<br>True boolean logic:")//true boolean
document.write(6<8);

console.log(452*452);//displays on console
console.log(50<2);//displays on console

document.write("<br>Using == for false: ");
document.write(10==15-3);

document.write("<br>Using == for true: ");
document.write(20==5*4);

document.write("<br>True === ");
var x1 = 15;
var x2 = 10+5;
document.write(x1===x2);

document.write("<br>False ===  ");
var y1 = "funny";
var y2 = 20;
document.write(y1===y2);

document.write("<br>False same value===");
var z1 = "10";
var z2 = 10;
document.write(z1===z2);

document.write("<br> False different value=== ");
var p1 = "you";
var p2 = "me";
document.write(p1===p2);

document.write("<br>True &&: ");
document.write(x1==x2&&z1==z2);

document.write("<br>False &&: ");
document.write(y2==y1&&x1==x2);

document.write("<br> True ||: ");
document.write(y2==y1||x1==x2);

document.write("<br> False ||: ");
document.write(p1==p2||z1==y2);

function noway() {
    document.getElementById("nn").innerHTML = !(8<3);//true Not operator
}

function yesway() {
    document.getElementById("yy").innerHTML = !(8==8);//false  Not operator
}
