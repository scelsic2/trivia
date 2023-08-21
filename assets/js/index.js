const startRandomBtn = document.querySelector('.start-random-btn')
const questionCategoryP = document.querySelector('.question-category-p')
const questionP = document.querySelector('.question-p')
const choicesDiv = document.querySelector('.choices-div')

const randomAPI_URL = 'https://opentdb.com/api.php?amount=10'

function startRandomGame() {
    console.log('game started')
    fetch(randomAPI_URL)
      .then(response => response.json())
      .then(data => {
        console.log('-----data-----')
        console.log(data.results[0])

        const questionCategory = data.results[0].category
        questionCategoryP.innerText = questionCategory

        const question = data.results[0].question
        questionP.innerText = question

        const incorrectAnswers = data.results[0].incorrect_answers
        const correctAnswer = data.results[0].correct_answer
        
        incorrectAnswers.push(correctAnswer)
        console.log('-----answerArray-----')
        console.log(incorrectAnswers)

        const shuffledAnswerArray = incorrectAnswers.sort()
        console.log('----shuffledAnswerArray-----')
        console.log(shuffledAnswerArray)
      })
      .catch(err => {
        console.error(err)
      });
}

startRandomBtn.addEventListener('click', startRandomGame)