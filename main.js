const choices = document.querySelectorAll(".choice")
const score = document.getElementById("score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
const scoreboard = {
    player: 0,
    computer: 0
}

choices.forEach(choice => choice.addEventListener("click", play))
window.addEventListener("click", clearModal)
restart.addEventListener("click", restartGame)

function play(e) {
    restart.style.display = "inline-block"
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    let winner = getWinner(playerChoice, computerChoice)
    showWinner(winner, computerChoice)
}

function getComputerChoice() {
    const randomNumber = Math.random()
    if (randomNumber < 0.33) {
        return "rock"
    }
    else if (randomNumber >= 0.66) {
        return "paper"
    }
    else
        return "scissors"
}

function getWinner(pc, cc) {
    if (pc === cc) {
        return "Draw"
    }
    else if (pc === "rock") {
        if (cc === "paper") {
            return "Computer"
        }
        else
            return "Player"
    }
    else if (pc === "paper") {
        if (cc === "scissors") {
            return "Computer"
        }
        else
            return "Player"
    }
    else if (pc === "scissors") {
        if (cc === "rock") {
            return "Computer"
        }
        else
            return "Player"
    }
}

function showWinner(w, cc) {
    if (w == "Player") {
        scoreboard.player++
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="choice fas fa-hand-${cc} fa-10x"></i>
        <p>Computer Choose <strong>${cc.charAt(0).toUpperCase()+cc.slice(1)}</strong></p>
        `
    }
    else if (w == "Computer") {
        scoreboard.computer++
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="choice fas fa-hand-${cc} fa-10x"></i>
        <p>Computer Choose <strong>${cc.charAt(0).toUpperCase()+cc.slice(1)}</strong></p>
        `
    }
    else {
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i class="choice fas fa-hand-${cc} fa-10x"></i>
        <p>Computer Choose <strong>${cc.charAt(0).toUpperCase()+cc.slice(1)}</strong></p>
        `
    }
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `

    modal.style.display = "block"
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

function restartGame() {
    scoreboard.player = 0
    scoreboard.computer = 0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}