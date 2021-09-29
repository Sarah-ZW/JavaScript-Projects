function Ride_Function() { //function with ternary operation
    var Height, Can_ride;
    Height =document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function voteFunction() { //function with ternary operation
    var num_years, determination;
    num_years = document.getElementById("vote").value;
    determination = (num_years<18) ? "Not quite old enough yet...":"Yep, you can vote!";
    document.getElementById("ag").innerHTML = determination;
}

function Vehicle(Make, Model, Year, Color) { //constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating data and calling upon constructor function
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model
    + " manufactured in " + Erick.Vehicle_Year;
}

function sport(nameOf, season, ballUse, costRating) { //constructor function
this.sport_nameOf = nameOf;
this.sport_season = season;
this.sport_ballUse = ballUse;
this.sport_costRating = costRating;
}

var pickleBall = new sport("Pickleball", "summer", "does", 4); //creating data and calling on constrcutor function
var mountainBiking = new sport("Mountain Biking", "fall", "doesn't", 5);
var rockClimbing = new sport("Rock Climbing", "summer", "doesn't", 6);
function sportFunction() {
    document.getElementById("New_and_This").innerHTML = "My sport of choice is " + pickleBall.sport_nameOf + " which is played in the " + pickleBall.sport_season + " and "
    + pickleBall.sport_ballUse + " require a ball in order to play.  On a scale of 1 to 10 on equipment cost, it is rated " + pickleBall.sport_costRating + ".";
}

function spices(originCountry, personLikes, hotRating) { //constructor function
    this.spice_originCountry = originCountry;
    this.spice_personLIkes = personLikes;
    this.spice_hotRating = hotRating;
}

function assign() { //using Nested functions
    document.getElementById("Nested_Function").innerHTML = "My Nested function result it " + hoyFunction();
    function hoyFunction() {
        var oneThing = 222;
        function mathFunction() {oneThing=(oneThing * 2)/4;}
        mathFunction();
        return oneThing;
    }
}
