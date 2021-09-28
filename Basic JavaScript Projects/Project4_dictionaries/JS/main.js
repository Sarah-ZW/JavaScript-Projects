function Dictionary() {//creating a dictionary
    var human = {
        age: 37,
        occupation: "professional athlete",
        teeth_count: 32,
        health_problems:"none",
        favorite_food: "spinach"
    };
    delete human.occupation;//deleting one of the dictionary items before it can be displayed
    document.getElementById("dictionary1").innerHTML = human.occupation;//setting the element with the id to show the dictionary item that was deleted
}