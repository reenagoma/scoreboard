let home=0
let away=0
let homePts= document.getElementById("Mpts")
let awayPts=document.getElementById("Tpts")
let firstTeam=document.getElementById("firstName")
let secondTeam=document.getElementById("secondName")

function add1M(){//add to first team
    home+=1
    homePts.textContent=home
}
function add2M(){
    home+=2
    homePts.textContent=home
}
function add3M(){
    home+=3
    homePts.textContent=home
}

function add1T(){//add to second team
    away+=1
    awayPts.textContent=away
}
function add2T(){
    away+=2
    awayPts.textContent=away
}
function add3T(){
    away+=3
    awayPts.textContent=away
}
function enter(){
    var userInput1= document.getElementById("team1").value//put user input in a variable 
    document.getElementById("firstName").textContent= userInput1//set text to the user input
    var userInput2= document.getElementById("team2").value
    document.getElementById("secondName").textContent= userInput2
}