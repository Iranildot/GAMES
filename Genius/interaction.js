let order = [] // Random order that lights up the buttons and accumulates each round
let clickedOrder = [] // Saves the order that the user clicked
let score = 0 // Stores the score
let entrar = 0 // If user enter the game over condition


// Verde = 0
// Vermelho = 1
// Amarelo = 2
// Azul = 3

// Selecting color divisions

const blue = document.querySelector('div.blue')
const yellow = document.querySelector('div.yellow')
const red = document.querySelector('div.red')
const green = document.querySelector('div.green')

// Getting the divs from the control panels

let rodada = document.querySelector('.rodada')
let scoreNaTela = document.querySelector('.score')

// Create random order of colors

let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4) // Draw a number from 0 to 3
    order.push(colorOrder)
    clickedOrder = []
    rodada.innerText = order.length
    for(i in order){ // This will light up the buttons to be clicked

        let elementColor = createColorElement(order[i])
        litColor(elementColor, Number(i) + 1)

    }


}

// Lights up the next color

let litColor = (element, numero) => {

    numero *= 1000
    setTimeout(() => {
        element.classList.add('selected')
    }, numero - 250)

    setTimeout(() => {
        element.classList.remove('selected')
    }, numero + 250)

}

// Checks if the buttons clicked were the same ones that lit up

let checkOrder = () => {

    for(i in clickedOrder){
        

        if(clickedOrder[i] != order[i]){
            if(order.length == 1){
                score = 0
            }
            entrar = 1
            gameOver()

            break
            
        }
       
    }

    if(clickedOrder.length == order.length && entrar == 0){

        nextLevel()
    }
    
    
    
}

// Function for user click

let click = (color) => {

    clickedOrder.push(color)
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

    
}

// Function that returns the color

let createColorElement = (color) => {

    if(color == 0){

        return green

    }else if(color == 1){

        return red

    }else if(color == 2){

        return yellow

    }else if(color == 3){

        return blue

    }

}

// Function to the next level

let nextLevel = () => {

        
        score++
        scoreNaTela.innerText = score
        alert(`Redirecting you to ${order.length + 1}ª round.`)
        shuffleOrder()
            
        

}

// Game Over Function
let gameOver = () => {

    order = []
    clickedOrder = []
    alert(`Your score was ${score}.`)
    score = 0
    window.open('./game-over.html','_self')

    
}

// Start the game

let playGame = () => {

    shuffleOrder()

}

// Click event to select color

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()

