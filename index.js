var readlineSync = require('readline-sync');
var chalk = require('chalk');

//welcome note
console.log(chalk.bgYellow('Welcome to the Bollywood Quiz'));
var userName = readlineSync.question(chalk.red("What's your Name: \n"));
console.log(chalk.blue('Hey',userName,", Let's Play the Bollywood Quiz!!"));

console.log('\n');
console.log(chalk.white.bgMagenta.bold.underline('Follow The Rules:  '));
console.log(chalk.red.underline('1.' + userName + ', There are 10 Questions on Bollywood and all are Compulsory.'));
console.log(chalk.red.underline('2. You will get 2 points on each Right Answer.'));
console.log(chalk.red.underline('3. One Point will be deducted if the Answer is Wrong.'));
console.log(chalk.red.underline('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');

var leaderboard = [
  {name:'Shreya',score: ' 14'},
  {name:'Manju',score: '  10'},
  {name:'Meen',score: '   08'}
];

console.log(chalk.bgCyan.underline('   LeaderBoard   '));
console.log(chalk.bgYellow('Name       Score '));
for(var i = 0;i<leaderboard.length;i++){
  console.log(chalk.yellowBright(leaderboard[i].name,'   ',leaderboard[i].score));
}

var score = 0;
function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.blue('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.bgRed('You are Wrong.'));
    console.log(chalk.blue('The Correct Answer is:',answer));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

function quizMcq(listOfAnswers,question,answer){
  var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.blue('The Correct Answer is: ',answer));
    score = score - 1;
  }
  
  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

var questionsList = [
 
   
  {
    question :'As of 2020, which is the only Bollywood movie to win 13 Filmfare Awards?' ,
    answer : 'Gully Boy',
  }, 
  {
    question :'Who is the lead Actress in movie Kalank?' ,
    answer : 'Alia Bhatt ',
  },
   {
    question :'Who is the lead Actor in Jay Ho?' ,
    answer : 'Salman Khan ',
  },
   {
    question :'Who is the father of Shraddha Kapoor?' ,
    answer : 'Shakti Kapoor ',
  },
   {
    question :'Who played the role of alien in PK?' ,
    answer : 'Amir Khan ',
  },
 ];

var mcqList = [

  {
    question : 'In 3 Idiots, what is Rancho s real name? ',
    array : ['Ranchhoddas Chanchad', 'Chatur', 'Phunsukh Wangdu', 'Viru'],
    answer : 'Phunsukh Wangdu'
  },
  {
    array : ['Anshuman', 'Ayshman', 'Askash', 'Armaan'],
    question : 'In Jab We Met, what is the name of Geets first love? ',
    answer : 'Anshuman'
  },
  {
    array : ['Gabbar', 'Sholey', 'Bansti', 'Dhanno'],
    question : 'What is the name of Sholays iconic villain? ',
    answer : 'Gabbar'
  },
  {
    array : ['Singer', 'Dancer', 'Actress', 'Lawyer'],
    question : 'In Om Shanti Om, what does Deepika Padukones character Shantipriya do? ',
    answer : 'Actress'
  },
  {
    array : ['Bauji', 'Simran', 'Minnama', 'Shanti'],
    question :  'What is the name of the lead female character in Dilwale Dulhania Le Jayenge? ',
    answer : 'Simran'
  },
  {
    array : ['Beti', 'Ghar', 'Nani', 'Maa'],
    question : 'Finish the quote from Deewar: "Mere paas _____ hai." ? ',
    answer : 'Maa'
  },
];

for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  console.log(chalk.blueBright.bold('Question',i+1));
  quiz(questionsList[i].question,questionsList[i].answer);
  console.log('*******************************');
}

var j = 5;
for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  console.log(chalk.blueBright.bold('Question',j++));
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);

  console.log('*******************************');
}

console.log('\n');
console.log(chalk.cyanBright.italic.underline('YAYYY!!!!,',userName,'your Total Score is:   ',score));
console.log('\n');
console.log(chalk.yellowBright.italic('Thanks for Solving the Bollywood Quiz,if your score is higher on the leaderboard than Please take the Screenshot of the Score and Send it to Shraddha.'));