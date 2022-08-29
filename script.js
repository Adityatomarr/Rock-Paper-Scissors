playerWon=0;
computerWon=0;
let computerPlay= function() {
        const arr=['Rock','Paper', 'Scissors'];
        //console.log(arr[Math.floor(Math.random()*arr.length)])
        return(arr[Math.floor(Math.random()*arr.length)])

}
let playerPlay =function() {
    a=prompt("Enter your choice!");
    return a;

}
function playRound(computerChoice,playerChoice){
    computerChoice=computerPlay().toLowerCase();
    playerChoice=playerPlay().toLowerCase();
    
    if (computerChoice==playerChoice){
        alert("Tie");

    }
    else if(
        (computerChoice=='rock' && playerChoice=='scissors') ||
        (computerChoice=='scissors' && playerChoice=='paper')||
        (computerChoice=='paper' && playerChoice=='rock')){
            alert("Computer Won!");
            computerWon+=1;
        } 
    else{
        alert("You won!");
        playerWon+=1;
    }
 
}
function play(){
    for(i=1; i<=10;i++){
        playRound();
        console.log(`Computer Won :${computerWon} || Player won :${playerWon}`)
    }
}