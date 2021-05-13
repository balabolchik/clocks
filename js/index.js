const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const numbersOfClock = document.querySelectorAll('.number')

function setTime() {
    const date = new Date();
    const time = [Math.floor(date.getHours()/10), date.getHours()%10, Math.floor(date.getMinutes()/10), date.getMinutes()%10, Math.floor(date.getSeconds()/10), date.getSeconds()%10];
    for (let i = 0; i < numbersOfClock.length; i++) {
        numbers.forEach(el => numbersOfClock[i].classList.remove(el));
        numbersOfClock[i].classList.add(numbers[time[i]]);
    }
}
setInterval( setTime, 1000 );