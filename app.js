function name() {
    var typename = prompt("What is your name")
    return typename
}
alert(name())

function valueh() {
    var human = 0
    return human
}
    

function valuec() {
     var computer = 0
}

function equation() {

 do{
    var randomNumber = Math.floor(Math.random() * 10) + 1
    computer = computer + randomNumber
 }while (computer < 16)

 return randomNumber
}

alert(equation())

function comparing1(human,computer) {
    if ((computer > human) && (computer <= 20) (human <= 20)){
        alert(`Computer Wins`);
    }
}
comparing1(equation,)

function comparing2(human,computer) {
    if ((computer < human) && (computer <= 20) (human <= 20)) {
        alert(`Human Win`);
    }
}
comparing2(equation,)