let userName = 'Faith';
userName === true ? console.log(`Hello, ${userName}.`) : console.log('Hello');

let userQuestion = "Will I do this?";
console.log(userName +", " + userQuestion);

let randomNumber = Math.floor(Math.random() * 7);

let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 0:
    eightBall = 'Signs point to yes'
    break;
}

console.log('The eightball answer: ' + eightBall);
