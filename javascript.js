

let compScoreNum = document.querySelector(".compScoreNum")
let YourScoreNum = document.querySelector(".YourScoreNum")
let compscore = 0 
let humanscore = 0 

let humanChoice;
let compChoice; 

function getcomputerchoice ( ){
    let compchoice = Math.random () * 100 
    if ( compchoice >= 66 ) {  

        return "rock"
        

    }
    else if ( compchoice <= 33 ) { 

        return "paper" 
 
         

    }
    else { 

        return "scissors"
    }
}

function gethumanchoice  (e) {
    if (e.target == rock){

        return "rock"

    }
    else if (e.target == paper){ 


        return "paper"


    }
    else if (e.target == scissors){

        return "scissors"

    }
    
    
    


    
}

function rounds(compchoice , humanChoice){
    if (compchoice == "rock" && humanChoice =="scissors"){
        return compscore++ 
    }
    else if (compchoice == "paper" && humanChoice =="rock"){
        return compscore++

    }
    else if (compchoice == "scissors" && humanChoice == "paper"){
        return compscore++
    }    
    else if (humanChoice == "rock" && compchoice =="scissors"){
        return humanscore++
     }
    else if (humanChoice == "paper" && compchoice == "rock"){
        return humanscore++

    }
    else if (humanChoice == "scissors" && compchoice == "paper"){
        return humanscore++
    }
    else if (compChoice == humanChoice ){
        compscore++
        humanscore++
        return 
    }





}

function gameLauncher(e){ 
    humanChoice = gethumanchoice(e)

    compChoice = getcomputerchoice()

    rounds(compChoice , humanChoice)
    scoreUpdater()


    declareWinner()


}

function scoreUpdater(){
    YourScoreNum.textContent = humanscore
    compScoreNum.textContent = compscore
}





function declareWinner(){
    if (humanscore == 5 && compscore != 5){ 

        alert ("You win")
        compscore = 0 
        humanscore = 0
        return 

    }
    else if (compscore == 5 && humanscore != 5 ){ 
        alert("You Lost")
        compscore = 0 
        humanscore = 0 
        return
    }
    else if (humanscore == 5 && compscore == 5 ){
        alert("Draw")
        compscore = 0 
        humanscore = 0 
        return 
    }
}


let btn = document.querySelectorAll(".btn")
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document. querySelector("#scissors")


btn.forEach(button => addEventListener("click",gameLauncher))
