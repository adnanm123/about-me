'use strict';

// Welcome message

let totalCorrectAnswers = 0;
let userName = prompt('Please enter your name:');
alert('Welcome to my website, ' + userName + '!');

// Question 1:

function favoriteSports() {

  let doILikeSports = prompt('Do I like sports?').toLowerCase();
  if (doILikeSports === 'yes' || doILikeSports === 'y') {
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeSports === 'no' || doILikeSports === 'n') {
    alert('No that is incorrect');
  } else {
    alert('The answer has to be a yes or no');
  }
}
favoriteSports();

// Question 2:

function userGuessVideoGames() {
  let doILikeVideoGames = prompt('Do I like video games?').toLowerCase();
  if (doILikeVideoGames === 'yes' || doILikeVideoGames === 'y') {
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeVideoGames === 'no' || doILikeVideoGames === 'n') {
    alert('No that is incorrect');
  } else {
    alert('The answer has to be a yes or no');
  }
}
userGuessVideoGames();

// Question3:

function userGuessTravel() {
  let doILikeTraveling = prompt('Do I like to travel?').toLowerCase();
  if (doILikeTraveling === 'yes' || doILikeTraveling === 'y') {
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeTraveling === 'no' || doILikeTraveling === 'n') {
    alert('No that is incorrect');
  } else {
    alert('The answer has to be a yes or no');
  }
}
userGuessTravel();

// Question 4:

function userGuessCruising() {
  let doILikeCrusing = prompt('Do I like to go cruising?').toLowerCase();
  if (doILikeCrusing === 'no' || doILikeCrusing === 'n') {
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeCrusing === 'yes' || doILikeCrusing === 'y') {
    alert('No that is incorrect');
  } else {
    alert('The answer has to be a yes or no');
  }
}
userGuessCruising();

// Question 5:

function userGuessWatchingMovies() {
  let doILikeMovies = prompt('Do I like to watch movies?').toLowerCase();
  if (doILikeMovies === 'no' || doILikeMovies === 'n') {
    alert('Yes you are correct');
    totalCorrectAnswers++;
  } else if (doILikeMovies === 'yes' || doILikeMovies === 'y') {
    alert('No that is incorrect');
  } else {
    alert('The answer has to be a yes or no');
  }
}
userGuessWatchingMovies();

// Question 6:

function userGuessFavNumber() {
  let correctNumber = '7';
  let remainingAttempts = 4;

  while (remainingAttempts > 0) {
    console.log(`You have ${remainingAttempts} attempts remaining`);
    let userGuessAnswer = prompt('Guess a number between 1 and 10.');
    remainingAttempts--;
    if (userGuessAnswer === correctNumber) {
      console.log('You are correct');
      alert('Well done! You guessed the correct number.');
      totalCorrectAnswers++;
      remainingAttempts--;
      remainingAttempts = 0;
      break;
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
}
userGuessFavNumber();

// Question 7:

function userGuessFavShow() {
  let favTVShowAnswers = ['Blacklist', 'Prison Break', 'Power', 'Money Heist', 'Game of Thrones'];
  let howManyAttempts = 6;
  let correctAnswer = false;
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
        howManyAttempts = 0;
        break;
      }
    }
    if(!correctAnswer && howManyAttempts > 0){
      console.log('You are incorrect. Try again.');
      alert('You are incorrect. Try again.');
      console.log('You have' + howManyAttempts + 'attempts remaining');
      alert(`You have ${howManyAttempts} attempts remaining`);
    }
  }
}
userGuessFavShow();

alert(`You got ${totalCorrectAnswers} correct out of 7 questions asked.`);
