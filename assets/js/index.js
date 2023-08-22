const startRandomDiv = document.querySelector('.start-random-div')
const startRandomBtn = document.querySelector('.start-random-btn')
const questionDiv = document.querySelector('.question-div')
const questionCategoryP = document.querySelector('.question-category-p')
const questionDifficultyP = document.querySelector('.question-difficulty-p')
const questionH2 = document.querySelector('.question-h2')
const choicesDiv = document.querySelector('.choices-div')
const choiceOne = document.querySelector('#choice1')
const choiceTwo = document.querySelector('#choice2')
const choiceThree = document.querySelector('#choice3')
const choiceFour = document.querySelector('#choice4')

const randomAPI_URL = 'https://opentdb.com/api.php?amount=10'

function startRandomGame() {
    startRandomDiv.classList.add('hide-me')
    questionDiv.classList.remove('hide-me') 
    
    fetch(randomAPI_URL)
      .then(response => response.json())
      .then(data => {
        console.log('-----data-----')
        console.log(data.results[0])

        const questionCategory = data.results[0].category
        questionCategoryP.innerText = questionCategory

        const questionDifficulty = data.results[0].difficulty
        questionDifficultyP.innerText = 'Difficulty: ' + questionDifficulty

        let question = data.results[0].question;
        question = question.replace(/&#039;/g, `'`);
        question = question.replace(/&rsquo;/g, `'`);
        question = question.replace(/&quot;/g, `"`);    
        
        questionH2.innerText = question

        const incorrectAnswers = data.results[0].incorrect_answers
        const correctAnswer = data.results[0].correct_answer
        
        incorrectAnswers.push(correctAnswer)
        console.log('-----answerArray-----')
        console.log(incorrectAnswers)

        const shuffledAnswerArray = incorrectAnswers.sort()
        console.log('----shuffledAnswerArray-----')
        console.log(shuffledAnswerArray)

        choiceOne.innerText = shuffledAnswerArray[0]
        choiceTwo.innerText = shuffledAnswerArray[1]

        if (shuffledAnswerArray[2] != undefined) {
            choiceThree.innerText = shuffledAnswerArray[2]
        }  

        if (shuffledAnswerArray[3] != undefined) {
            choiceFour.innerText = shuffledAnswerArray[3]    
        }
        

      })
      .catch(err => {
        console.error(err)
      });
}

startRandomBtn.addEventListener('click', startRandomGame)