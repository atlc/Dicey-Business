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