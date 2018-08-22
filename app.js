let divIndex = 0;
let dice = [];

class Dice {
    constructor(value) {
        value = (Math.floor(Math.random() * 6) + 1);
        this.value = value;
    }

    roll() {
        this.value = (Math.floor(Math.random() * 6) + 1);
    }
}

$('#generateDie').click(function () {
    $('#rollAll').attr('hidden', false);
    $('#sumDice').attr('hidden', false);
    dice.push(new Dice());
    $('#diceBox').append(`<div class='die' id='die${divIndex}'>${dice[divIndex].value}</div>`);
    divIndex++;
});

$('#rollAll').click(function () {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll();
        $(`#die${i}`).text(dice[i].value);
    }
});

$('#sumDice').click(function () {
    let sum = 0;
    dice.forEach(die => {
        sum += die.value;
    });
    alert(`The sum of all the dice is ${sum}`);
});