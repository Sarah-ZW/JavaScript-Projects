function hmm() {
    var h = "this text is green"; //declaring variable and equating to string
    var r = h.fontcolor("green");//declaring variable and making it equal to variable h but in green font
    document.getElementById("test").innerHTML = r;//finding html element with id and changing it
}
function cat() {
    var a = "I used to be a runner, but";//declaring variable and equating to string
    a += " now I'm a mountain biker.";//adding onto the original variable
    document.getElementById("cat").innerHTML = a;//finding html element with id and changing it
    }