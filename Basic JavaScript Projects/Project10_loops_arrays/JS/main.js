function Call_Loop() { // while loop that counts by 5 up to 100
   let sample = "";
    let y = 5;
         while (y<105) {
            sample=sample+y + "<br>";
            y=y+5;
            document.getElementById("Loop").innerHTML = sample;
        }
        let str = "Almost the weekend"; //using the string length function
        document.getElementById("lengt").innerHTML = "String length: <br>" + str.length
         }

         // creating a an array and then listing it it out using a for loop
         var sports = ["pickleball", "basketball", "rock climbing", "mountain biking", "orienteering"];
         var helper;
         var listItem = "";
         function listSports() {  //Using a for loop to list out items
             for (helper=0; helper<sports.length; helper++) {
             listItem+=sports[helper] + "<br>";
             }
             document.getElementById("listSports1").innerHTML = listItem;
         }

         function array_Function() { //creating an array and then calling different elements from it
             var groupies = [];
             groupies[0] = "Tasha";
             groupies[1] = "Zee";
             groupies[2] = "Hannah"
             groupies[3] = "Pablo"
             document.getElementById("Array").innerHTML = "Let's hang out with " + groupies[2] + " today!";
         }

         function constant_function() { //using constants to create arrays and then modify properties
             const plant = {type:"sunflower", color:"yellow", eats:"sun and water"};
             plant.location = "northeast"
             plant.eats = "sunshine";
             document.getElementById("Constant").innerHTML = "Plants eat " + plant.eats + " in the " + plant.location + ".";

         }

         function letItBe() {  //using let to show block scope
             document.write("<br><br>using let:<br>");
            let tee =44; 
            {
                 let tee = 33;
                 document.write(tee);
             }
             document.write("<br>" + tee);
         }
         letItBe();

         function hallway() { //using return to get the square root of a variable
             xee = 444;
             return Math.sqrt(xee);
         }
         document.getElementById("hall").innerHTML = "The square root of xee = " + hallway();

         let athlete = { //Using a function within the data structure
             athleteName: "Tiger Woods",
             turnedPro: 1996,
             status: "unknown",
             ranking: 20,
             description: function() {
                 return this.athleteName + " is ranked number " + this.ranking + " in the world.";
             }
         };
         document.getElementById("tw").innerHTML = athlete.description();

         var hee = ""; //counting to 5 utilizing break to stop at 5 and continue to skip number 3
         for (var iee =0; iee<10; iee++) {
             if (iee===5) {break;}
             else if (iee===3) {continue;}
             hee+= "The number is " + iee + "<br>";
         }
         document.getElementById("fee").innerHTML = hee;