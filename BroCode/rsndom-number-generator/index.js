const min = 50;
const max = 100;
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const rol = document.getElementById('rol');
let randomNum1;
let randomNum2;
let randomNum3;

rol.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min) + min);
    randomNum2 = Math.floor(Math.random() * (max - min) + min);
    randomNum3 = Math.floor(Math.random() * (max - min) + min);
    p1.textContent = randomNum1;
    p2.textContent = randomNum2;
    p3.textContent = randomNum3;
}
