function yes() {
    var x = 545;
    var y = 352;
    var c, d;
    c = document.getElementById("num").value;
    c=parseInt(c);
    d = x + y + c;
    document.getElementById("result").innerHTML = d;
}
