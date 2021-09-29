function lLobe() { //local variable
    var x=20;
    document.write(x+100+"<br>");
}

var y=19
function gLobe() { //global variable
    var j = 33;
    document.write(y*3);
    console.log(y*3);
}
lLobe();
gLobe();

function er1() { //intentional error
    document.write(j);
    console.log(j);
}
er1();

function datF() { //function tells you if before 6 PM
    if(new Date().getHours()<18) {
        document.getElementById("yes").innerHTML = "It is before 6 PM";
    }
}

var yo =5 //basic if statement
if (yo<6) {
    document.write("<br>party!");
}

function pj() { //if statement that tells you how the # you input relates to 22
    var ant, bop;
    bop =document.getElementById("letsgo").value;
    ant =22;
    if (bop<ant) {
        document.getElementById("rightnow").innerHTML = "Your number is less than 22.";
    }
    else if (bop==ant) {
        document.getElementById("rightnow").innerHTML = "Your number is equal to 22";
    }
    else {
        document.getElementById("rightnow").innerHTML = "Your number is greater than 22.";
    }
 }

 function Time_Function() { //time function with if, else if, and else
     var Time = new Date().getHours();
     var Reply;
     if (Time < 12 == Time > 0) {
         Reply = "It is morning time!";
     }
     else if (Time >= 12 == Time < 18) {
         Reply = "It is afternoon.";
     }
     else {
         Reply = "It is evening time."
     }
     document.getElementById("Time_of_Day").innerHTML = Reply;
 }