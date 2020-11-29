import $ from 'jquery';

let dice: Array<Die> = [];

$('#newDie').click(() => new Die());
$('#rerollDie').click(() => dice.forEach(die => die.reroll()));
$('#sumDie').click(() => {
        let sum = dice.reduce((total, die) => (total += die.value), 0);
        $('#dice-sum').empty().append(`Dice Sum: ${sum}`);
});
class Die {
    private unicode = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    private dieBoard: JQuery;
    private div: JQuery;
    value: number = 0;

    constructor() {
        this.div = $('');
        this.dieBoard = $('.flex-dice');
        this.value = this.roll();
        dice.push(this);
    }

    dieValue() {
        return Math.floor(Math.random() * 6) + 1;
    }

    roll() {
        let valueToReturn = this.dieValue();
        this.div = $(`<div>${this.unicode[valueToReturn - 1]}</div>`);
        this.div.appendTo('.flex-dice');
        this.div.click(() => this.reroll());
        this.div.dblclick(() => this.delete());
        return valueToReturn;
    }

    reroll() {
        this.value = this.dieValue();
        this.div.empty().text(this.unicode[this.value - 1]);
    }

    delete() {
        if(dice.indexOf(this) > -1) dice.splice(dice.indexOf(this), 1);
        this.div.remove();
    }
}
