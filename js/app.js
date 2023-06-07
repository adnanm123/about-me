'use strict';

// proof life
// console.log('hi');

// let doILikeStarWars = prompt('Do I like Star War? Yes or no?').toLowerCase();

//
// =
// asigns a value
// ex.:
// let cat = 'Luke'
// cat now equals the value 'Luke'

// ===
// compares a value
// do these two things have the same value?
// cat === 'Luke'
// does cat have the value 'Luke'
// === will also compare data type
// let age = 2
// let candles = '2'
// Ex.:
// age == candles // will be true
// age === candles // will be false
// ONLY USE === in this class


// if user types in either 'yes' or 'y' this statement
// should evaluated to true
// if (doILikeStarWars === 'yes' || doILikeStarWars === 'y') {
//   console.log('Yes, I do like Star Wars');
// } else if (doILikeStarWars === 'no' || doILikeStarWars === 'n') {
//   console.log('That\'s incorrect');
// } else {
//   console.log('You need to answer with a yes or a no');
// }

// Operators
/*

&& - the "logical and"
  If I have two conditions separated by an &&, both have to to be true in order for the entire statement to be evaluated as true

|| - the "logical or" (double pipe)
  if at least one condition is true, the entrie statement will be evaluated as true

! — the "logical not" ( often called "bang")
  reverse the value of any statement
  ex.:
  cat !== 'Luke' // does cat not equal luke?

  ex.:
  !booleanVarribale // is booleanVarriable false?

*/

// Welcome message
let userName = prompt('Please enter your name:');
// console.log(userName);
alert('Welcome to my website, ' + userName + '!');

// Question 1:
let doILikeSports = prompt('Do I like sports?').toLowerCase();
if (doILikeSports === 'yes' || doILikeSports === 'y') {
  // console.log('Yes, I do like sports!');
  alert('Yes you are correct');
} else if (doILikeSports === 'no' || doILikeSports === 'n') {
  // console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  // console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}

// Question 2:
let doILikeVideoGames = prompt('Do I like video games?').toLowerCase();
if (doILikeVideoGames === 'yes' || doILikeVideoGames === 'y') {
  // console.log('Yes, I do like video games!');
  alert('Yes you are correct');
} else if (doILikeVideoGames === 'no' || doILikeVideoGames === 'n') {
  // console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  // console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}

// Question3:
let doILikeTraveling = prompt('Do I like to travel?').toLowerCase();
if (doILikeTraveling === 'yes' || doILikeTraveling === 'y') {
  console.log('Yes, I do like to travel!');
  alert('Yes you are correct');
} else if (doILikeTraveling === 'no' || doILikeTraveling === 'n') {
  console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}

// Question 4:
let doILikeCrusing = prompt('Do I like to go cruising?').toLowerCase();
if (doILikeCrusing === 'no' || doILikeCrusing === 'n') {
  // console.log('No, I don\'t like to cruise!');
  alert('Yes you are correct');
} else if (doILikeCrusing === 'yes' || doILikeCrusing === 'y') {
  // console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  // console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}

// Question 5:
let doILikeMovies = prompt('Do I like to watch movies?').toLowerCase();
if (doILikeMovies === 'no' || doILikeMovies === 'n') {
  // console.log('Yes, I don\'t like movies!');
  alert('Yes you are correct');
} else if (doILikeMovies === 'yes' || doILikeMovies === 'y') {
  // console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  // console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}


// class example:

// // store values (answers) in an array
// let favMoviesAnswers = ['Star Wars', 'Enchanted', 'Quartet'];

// // user is prompted for a guess
// // let userMovieGuess = prompt('What is one of my favorite movies');
// let userMovieGuess = 'Quartet';

// // how many guesses do they get? let's store it somehow
// let howManyAttempts = 4;

// // we need a loop to give the user multiple attempts
// while (howManyAttempts) {
//   howManyAttempts--;
//   console.log(`You have ${howManyAttempts} attempts remaining`);
//   // evaluate that guess, is their guess in the array of possible answers?
//   for (let i = 0; i < favMoviesAnswers.length; i++) {
//     // console.log(userMovieGuess, favMoviesAnswers[i]);
//     console.log(favMoviesAnswers[i]);
//     // check if user has the right right answer
//     // if they right: You got it right
//     if (userMovieGuess === favMoviesAnswers[i]) {
//       console.log('you are correct!');
//     }
//   }
// }


// Question 7:
let favTVShowAnswers = ['Blacklist', 'Prison Break', 'Power', 'Money Heist', 'Game of Thrones'];
let howManyAttempts = 6;
let correctAnswer = false; // to start off the user has not guessed correct answer yet.
while (howManyAttempts > 0) {
  console.log(`You have ${howManyAttempts} attempts remaining`);

  let userTVQuestion = prompt('What is one of my favorite tv shows');
  howManyAttempts--;
  for (let i = 0; i < favTVShowAnswers.length; i++) {
    if (userTVQuestion === favTVShowAnswers[i]) {
      alert('You are correct!');
      correctAnswer = true;
      howManyAttempts--;
      howManyAttempts = 0; // Exit the while loop
      break; // Exit the for loop
    }
    // else if(userTVQuestion !== favTVShowAnswers[i]){
    // alert('You are incorrect. Try again.');
    //   continue;
  }
  if(!correctAnswer && howManyAttempts > 0){
    alert('You are incorrect. Try again.');
    alert(`You have ${howManyAttempts} attempts remaining`);
  }
}
// alert('You are incorrect. Try again.');
// alert(`You have ${howManyAttempts} attempts remaining`);
// userTVQuestion = prompt('What is one of my favorite tv shows');


















//   if (howManyAttempts === 0) {
//     alert('Sorry, you have exhausted all your attempts.');
//     alert('The possible correct answers are: ' + favTVShowAnswers.join(', '));
//   } else if (userTVShowGuess !== favTVShowAnswers[i]) {
//     alert('Incorrect guess! Try again.');
//   }
// }
