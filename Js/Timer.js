import { UI } from './UI.js';

export class Timer extends UI {
    #element = null;
    #interval = null;
    numberOfSeconds = 0;
    maxNumberofSeconds = 999;

    init() {
        this.#element = this.getElement(this.UISelectors.timer);
    }

    #startTimer() {
        this.#interval = setInterval(() => this.#updateTimer(), 1000)
    }

    stopTimer() {
        clearInterval(this.#interval);
    }

    resetTimer() {
        this.numberOfSeconds = 0;
        this.#setTimerValue(this.numberOfSeconds);
        this.stopTimer();
        this.#startTimer();
    }

    #updateTimer() {
        this.numberOfSeconds++;
        this.numberOfSeconds <= this.maxNumberofSeconds ?
            this.#setTimerValue(this.numberOfSeconds) : this.stopTimer;
    }

    #setTimerValue(value) {
        this.#element.textContent = value
    }


}