'use strict';

let totalCorrectAnswers = 0;
// Welcome message
let userName = prompt('Please enter your name:');
// console.log(userName);
alert('Welcome to my website, ' + userName + '!');

// Question 1:

function favoriteSports() {

  let doILikeSports = prompt('Do I like sports?').toLowerCase();
  if (doILikeSports === 'yes' || doILikeSports === 'y') {
    // console.log('Yes, I do like sports!');
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeSports === 'no' || doILikeSports === 'n') {
    // console.log('That\'s wrong');
    alert('No that is incorrect');
  } else {
    // console.log('The answer has to be a yes or a no');
    alert('The answer has to be a yes or no');
  }
}
favoriteSports();

// Question 2:

function userGuessVideoGames() {
  let doILikeVideoGames = prompt('Do I like video games?').toLowerCase();
  if (doILikeVideoGames === 'yes' || doILikeVideoGames === 'y') {
    // console.log('Yes, I do like video games!');
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeVideoGames === 'no' || doILikeVideoGames === 'n') {
    // console.log('That\'s wrong');
    alert('No that is incorrect');
  } else {
    // console.log('The answer has to be a yes or a no');
    alert('The answer has to be a yes or no');
  }
}
userGuessVideoGames();

// Question3:

function userGuessTravel() {
  let doILikeTraveling = prompt('Do I like to travel?').toLowerCase();
  if (doILikeTraveling === 'yes' || doILikeTraveling === 'y') {
    // console.log('Yes, I do like to travel!');
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeTraveling === 'no' || doILikeTraveling === 'n') {
    // console.log('That\'s wrong');
    alert('No that is incorrect');
  } else {
    // console.log('The answer has to be a yes or a no');
    alert('The answer has to be a yes or no');
  }
}
userGuessTravel();

// Question 4:

function userGuessCruising() {
  let doILikeCrusing = prompt('Do I like to go cruising?').toLowerCase();
  if (doILikeCrusing === 'no' || doILikeCrusing === 'n') {
    // console.log('No, I don\'t like to cruise!');
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeCrusing === 'yes' || doILikeCrusing === 'y') {
    // console.log('That\'s wrong');
    alert('No that is incorrect');
  } else {
    // console.log('The answer has to be a yes or a no');
    alert('The answer has to be a yes or no');
  }
}
userGuessCruising();

// Question 5:
let doILikeMovies = prompt('Do I like to watch movies?').toLowerCase();
if (doILikeMovies === 'no' || doILikeMovies === 'n') {
  // console.log('Yes, I don\'t like movies!');
  alert('Yes you are correct');
  totalCorrectAnswers++;
} else if (doILikeMovies === 'yes' || doILikeMovies === 'y') {
  // console.log('That\'s wrong');
  alert('No that is incorrect');
} else {
  // console.log('The answer has to be a yes or a no');
  alert('The answer has to be a yes or no');
}

// Question 6:
let correctNumber = '7'; // The correct number to guess
let remainingAttempts = 4; // Number of attempts the user has

while (remainingAttempts > 0) {
  console.log(`You have ${remainingAttempts} attempts remaining`);
  let userGuessAnswer = prompt('Guess a number between 1 and 10.'); // Prompt the user to enter a numeric guess
  remainingAttempts--;
  if (userGuessAnswer === correctNumber) {
    console.log('You are correct');
    alert('Well done! You guessed the correct number.');
    totalCorrectAnswers++;
    remainingAttempts--;
    remainingAttempts = 0;
    break; // Exit the loop since the user has guessed correctly
  } else if (userGuessAnswer < correctNumber) {
    alert('Too low! Try again.');
    console.log('You have' + remainingAttempts + 'attempts remaining');
    alert(`You have ${remainingAttempts} attempts remaining`);
  } else if(userGuessAnswer > correctNumber) {
    alert('Too high! Try again.');
    console.log('You have' + remainingAttempts + 'attempts remaining');
    alert(`You have ${remainingAttempts} attempts remaining`);
  }
  if (remainingAttempts === 0) {
    alert(`Sorry, you have exhausted all your attempts. The correct number was ${correctNumber}.`);
  }
}

// Question 7:
let favTVShowAnswers = ['Blacklist', 'Prison Break', 'Power', 'Money Heist', 'Game of Thrones'];
let howManyAttempts = 6; // set the number of attempts to 6
let correctAnswer = false; // initialize 'correctAnswer' variable as false to track if the user has guessed the correct answer
while (howManyAttempts > 0) {
  console.log(`You have ${howManyAttempts} attempts remaining`);

  let userTVQuestion = prompt('What is one of my favorite tv shows');
  howManyAttempts--;
  for (let i = 0; i < favTVShowAnswers.length; i++) {
    if (userTVQuestion === favTVShowAnswers[i].toLowerCase()) {
      console.log('You are correct');
      alert('You are correct!');
      totalCorrectAnswers++;
      correctAnswer = true;
      howManyAttempts--;
      howManyAttempts = 0; // Exit the while loop
      break; // Exit the for loop
    }
  }
  if(!correctAnswer && howManyAttempts > 0){
    console.log('You are incorrect. Try again.');
    alert('You are incorrect. Try again.');
    console.log('You have' + howManyAttempts + 'attempts remaining');
    alert(`You have ${howManyAttempts} attempts remaining`);
  }
}
alert(`You got ${totalCorrectAnswers} correct out of 7 questions asked.`);
