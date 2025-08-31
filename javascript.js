// 1 get input from computer 
// 2 get input from human 
// 3 compare inputs 
// 4 declare winner 
// 5 make rounds 
// i think it might have scope problems --> make a play function and call others in it 






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





let compscore = 0 ;
let humanscore = 0 ;





function rounds (compvalue , humanvalue){
    
    if (compvalue == "rock" && humanvalue== "scissors") {
        compscore = ++compscore


        return console.log("computer played rock you lost")

    }
    else if ( compvalue == "paper" &&  humanvalue == "rock" ){
        compscore = ++compscore


        return console.log ( "computer played paper you lost ")
    }
    else if (compvalue == "scissors" && humanvalue == "paper") { 
        compscore = ++compscore

        
        return console.log ( "computer played scissors you lost")
    }
    else if (compvalue == humanvalue){
        compscore = ++compscore
        humanscore = ++humanscore
        return console.log ( "Its a Draw ")
    }
    else {
        humanscore = ++humanscore
        return console.log ( "You won")
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
    for ( ; compscore < 5 || humanscore < 5  ; rounds()   ){
        rounds(getcomputerchoice() , gethumanchoice());
        winnerdeclration();






    }



}

gamelauncher();