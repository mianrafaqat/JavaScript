
let isAlive = true
let message = ""
let hasBlackJack = false
let cards = []
let sum = 0
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')
let messageEl = document.getElementById('message-elem')
let start_Game = document.getElementById('start-btn')
let new_Card = document.getElementById('new-btn')
let playerEl = document.getElementById('player-el')
let player = {
    name : "Per",
    chips : 200 
}
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function getRandomCard() {
    let randomNumbers = Math.floor(Math.random() * 13) + 1
    if (randomNumbers > 10) {
        return 11
    } else if(randomNumbers === 1) {
        return 11
    } else {
        return randomNumbers
    }
    
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
        
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
         message = "Do you want to draw a new card"
    } else if (sum === 21) {
        message = "WOW! You got a BlackHack"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true  && hasBlackJack === false) { 
        let card = getRandomCard()
        sum += card
        cards.push(card)
        startGame();
    }
}

// let person = {
//     name : "Rafaqat",
//     age: 21,
//     country : "Pakistan"
// }
// function logData() {
//     console.log(person.name + " is " + person.age + " Years old and and lives in " + person.country)
// }
// logData()

// age = 67
// if (age < 6) {
//     console.log("Free")
// } else if(age >= 6 && age <= 17 ) {
//     console.log("Child Discount")
// } else if (age >= 18 && age <= 26) {
//     console.log("Student Discount")
// } else if (age >= 27 && age <= 66) {
//     console.log("Full price")
// } else if (age > 66) {
//     console.log("Senior citizen discount")
// };

// let largeCountries = ["China", "India", "USA", "Indonatia", "Pakistan"]
// console.log("The 5 largest Countries in the world")
// for (let i = 0; i < largeCountries.length; i++) {
//     const element = largeCountries[i];
//     console.log("-" + element)
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonatia", "Monaco"]
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)