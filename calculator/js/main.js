// add event listeners to all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener( 'click', handleButtonClick ) );

const displayElement = document.querySelector(".display");

const calculator = {
    display: "0",
    buffer: 0,
    currentOperation: "",

    addToDisplay(number) { if (this.display.length < 14) this.display === "0" ? this.display = number : this.display += number }, //if display isnt full, add number by concatination. if display is zero, replace it.
    updateDisplay() {displayElement.innerText = this.display.toString().substring(0, 14)},
    reset() {this.display = "0"; this.buffer = 0; calculator.updateDisplay();},

    operation(clickedBtnId) {this.buffer = this.display; this.display = "0"; this.currentOperation = clickedBtnId;},
    equals() {this.display = eval(this.buffer + this.currentOperation + this.display); this.updateDisplay()},
    decimal() {if (!this.display.includes(".")) this.display += "."; this.updateDisplay()}
};


function handleButtonClick(event) {
    const clickedBtnId = event.currentTarget.id;
    if (clickedBtnId === "C") {
        calculator.reset()
    } else if (clickedBtnId.match(/^[0-9]+$/) != null) {
        calculator.addToDisplay(clickedBtnId);
        calculator.updateDisplay();
    } else {
        if (clickedBtnId === ".") calculator.decimal();
        else if (clickedBtnId === "=") calculator.equals();
        else calculator.operation(clickedBtnId);
    };
};