// 1 get input from computer 
// 2 get input from human 
// 3 compare inputs 
// 4 declare winner 
// 5 make rounds 
// i think it might have scope problems --> make a play function and call others in it 

console.log("Rules : 1- each win is a +1 score ")
console.log("2- draws add +1 to both sides ")


let compscore = 0 ;
let humanscore = 0 ;



function getcomputerchoice ( ){
    let compchoice = Math.random () * 100 
    if ( compchoice >= 66 ) { 
        return compchoice = "rock";

    }
    else if ( compchoice <= 33 ) { 
        return compchoice = "paper";

    }
    else { 
        return compchoice = "scissors";
    }
}

function gethumanchoice  ( ) {
    let choice = prompt ( "enter your choice (rock /paper / scissors )" )
    return choice.toLowerCase() ;
    
}










function rounds (compvalue , humanvalue){

    if (compvalue == "rock" && humanvalue== "scissors") {
        compscore = compscore + 1 

        return console.log( `computer played rock you lost you played ${humanvalue}`)

    }
    else if ( compvalue == "paper" &&  humanvalue == "rock" ){
        compscore = compscore + 1 


        return console.log ( `computer played paper you lost you played ${humanvalue}`)
    }
    else if (compvalue == "scissors" && humanvalue == "paper") { 
        compscore = compscore + 1 

        
        return console.log ( `computer played scissors you lost you played ${humanvalue}`)
    }
    else if (humanvalue == "rock" && compvalue== "scissors") {
        humanscore = humanscore + 1 


        return console.log(`computer played scissors you won you played ${humanvalue}`)

    }
    else if ( humanvalue == "paper" &&  compvalue == "rock" ){
        humanscore = humanscore + 1 


        return console.log ( `computer played rock you won you played ${humanvalue}`)
    }
    else if (humanvalue == "scissors" && compvalue == "paper") { 
        humanscore = humanscore + 1 

        
        return console.log ( `computer played paper you won you played ${humanvalue}`)
    }
    else if (humanvalue == compvalue){
        humanscore = humanscore + 1 
        compscore = compscore + 1
        return console.log(`you both played ${compvalue}`)
    }
    



} 


function winnerdeclration ( ) { 

        if (compscore == 5 ){
            return console.log (`computer reached ${compscore} first and won `)

        }
        else if (humanscore == 5) { 
            return console.log (`You reached ${humanscore} first and Won`)

        }



}

function gamelauncher () { 
    for ( ; compscore < 5 || humanscore < 5  ; rounds(getcomputerchoice(),gethumanchoice())   ){
        winnerdeclration();






    }



}

gamelauncher();