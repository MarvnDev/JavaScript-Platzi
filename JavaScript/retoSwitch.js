var elements = ["rock", "paper", "scissors"]

var userValue = elements[Math.floor(Math.random()*3)]
userValue
var botValue = elements[Math.floor(Math.random()*3)]
botValue

switch(true){
    case (userValue === botValue):
        console.log("Tie!")
    break
    case (userValue === "paper" && botValue === "rock"):
        console.log("User win!")
    break
    case (userValue ==="scissors" && botValue === "paper"):
        console.log("User win!")
    break
    case(userValue === "rock" && botValue === "scissors"):
        console.log("User win!")
    break
    default:
        console.log("Bot win!")

}