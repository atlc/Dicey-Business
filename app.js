class Dice {
    constructor(value) {
        this.value = value;
    }

    roll() {
        return (Math.floor(Math.random() * 6) + 1);
    }
}

let divIndex = 0;

$('#generateDie').click(function() {
    divIndex++;
    $('body').append(`<div id='die${divIndex}'>DIE_VAL</div>`);
});