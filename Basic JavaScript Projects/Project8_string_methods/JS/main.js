function cat() { //concatenation
    var z1 = "Welcome "
    var z2 = "to "
    var z3 = "Miami "
    var z4 = "mis amigos!"
    var hui = z1.concat(z2,z3,z4);
    document.getElementById("yep").innerHTML = hui;
}

function sliceitup() { //slice function
    var sentence = "A magical mystical world awaits with no olives";
    var chopped =sentence.slice(2,18);
    document.getElementById("grow").innerHTML = chopped;
}

var upper1 = "Show me the money"; //uppercase
var upper2 = upper1.toUpperCase();
document.write(upper2);

find1 = upper1.search("me"); //search
document.write("<br>You found #: " + find1);

function returnAString() { //Turns a number into a string
    var num1 = 452;
    num1String = num1.toString();
    document.write("<br>Number to a string: ");
    document.write(num1String);
}
returnAString();

function truncate() { //reduces the length of a number through precicion function
    var z5=10000.0304543549954854985494859;
    document.getElementById("veryG").innerHTML = z5.toPrecision(10);

}

document.write("<br><br>toFixed function: "); //toFixed Function
var getSmall = 234.56754;
var getSmallNow = getSmall.toFixed(3);
document.write(getSmallNow);

document.write("<br><br> valueOf function: ");  //valueOf Function
var getPrim = 2500;
var getPrimNow = getPrim.valueOf();
document.write(getPrimNow);