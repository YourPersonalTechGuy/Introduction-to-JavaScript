/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

var votingAge = 17;
if(votingAge > 17){
  console.log(true);
}
else{
  console.log(false);
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

var var1 = 1;
var var2 = 2;

if (var1 < var2){
  var1 = var1 + var2;
  console.log(var1);
}





/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

var num1 = "1999";
num1 = Number(num1);
console.log(num1);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
    return a*b;
  }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){
  return age * 7;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

//Calculating how much to feed the dog based on age and weight of the dog

function hungryDog(weight, age){
    
  //checks if puppy
  if (age < 1){
    //sets variables age and for puppy
    //converts age to months
    let puppyAge = age * 12
    //multiplier for determining the 
    let puppyMultipler = 0;
    
    //checking for age for puppy puppyMultipler
    //if puppy is 7 months or older
    if(puppyAge > 6){
      puppyMultipler = 0.04;
    }
    //if puppy is 4 months to 6 months
    else if (puppyAge > 3){
      puppyMultipler = 0.05;
    }
    //if puppy is 1 month to 3 months 
    else if (puppyAge > 0){
      puppyMultipler = 0.10;
    }
    //error catch
    else{
      console.log("something went wrong");
      return;
    }
    //returns puppy food requirements
    return weight * puppyMultipler;
  }
  //checks if dog
  else if (age >= 1){
    //sets the dogMultipler variable
    let dogMultipler =0;

    //checks weight for dogMultipler
    //if dog weighs more than 15 lbs
    if(weight > 15){
      dogMultipler = 0.02;
    }
    //if dog weighs 11 lbs to 15 lbs
    else if(weight > 10){
      dogMultipler = 0.03
    }
    //if dog weighs 6 lbs to 10 lbs
    else if(weight > 5){
      dogMultipler= 0.04;
    }
    //if dog weighs less than or equal to 5lbs
    else if(weight <= 5){
      dogMultipler = 0.05;
    }
    //error catch
    else{
      console.log("something went wrong");
      return;
    }
    //returns dog food requirements
    return weight * dogMultipler;
  }
  //error catch
  else{
    console.log("something went wrong");
    return;
  }
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/


function game(user, computer){
  //configures random number generator (RNG)
  let computerRandom = Math.round(Math.random() * 2);
  
  //uses RNG to randomly select the opponent state if no opponent state is defined
  if(computer === undefined){
    if(computerRandom === 0){computer = "rock"}
    else if(computerRandom === 1){computer = "paper"}
    else if(computerRandom === 2){computer = "scissors"}
  }

  //Defines the game states
  //Defines the tied state
  if(user === computer){
    return "it's a tie";
  }

  //Defines the Lose state
  else if((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")){
    return "you lose!";
  }

  //Defines the Win state
  else if((computer === "rock" && user === "paper") || (computer === "paper" && user === "scissors") || (computer === "scissors" && user === "rock")){
    return "you win!";
  }

  //Error catch
  else{
    console.log("something went wrong")
    return;
  }
}
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(kilometers){
    return kilometers * 0.621371;
  }



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(centimeters){
    return centimeters / 30.48;
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/


function annoyingSong(number){
   for (let i = number; number >= 1; i--){
      return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number-1} bottles of soda on the wall`;
  }        
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(theGrade){
  if(theGrade>=90){
    return 'you got an A';
  }
  else if(theGrade>=80){
    return 'you got a B';
  }
  else if(theGrade>=70){
    return `you got a C`;
  }
  else if(theGrade>=60){
    return `you got a D`;
  }
  else if(theGrade<60){
    return `you got an F`
  }
}
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/

function vowelCounter(theInput) {
  //defines the values that are variables and saves it in an array
  let vowels = ["a", "e", "i", "o", "u"];

  //declares the variable counter that will be used to increment per vowel
  let counter = 0;

  //For loop that declares that it will loop for every letter in the string of theInput reading the letter as lowercase
  for(let letter of theInput.toLowerCase()){

    //if statement that declares that if the letter of the string is included in the vowel array, increment the counter by 1  
    if(vowels.includes(letter)){
      counter++;
    }
  }
  
  //returns the updated counter
  return counter;
}




/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}

