const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
const countl = document.getElementById('countl');
let count = 0;

increase.onclick = function() {
    count++
    countl.textContent = count
}
reset.onclick = function() {
    count = 0
    countl.textContent = count
}
decrease.onclick = function() {
    count--
    countl.textContent = count
}