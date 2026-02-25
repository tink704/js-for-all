let circumference;
let radius;
let pi = 3.14159

radius = window.prompt('enter the circle diameter');
circumference = 2 * pi * `${radius}`
document.getElementById('p1').innerHTML = `your circumference value is ${circumference}`