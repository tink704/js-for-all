let circumference;
const radiusInput = document.getElementById('input1');
const pi = 3.14159;
const p2 = document.getElementById('p2');
const submit = document.getElementById('submit');
//using prompt method 
radius = window.prompt('enter the circle diameter');
circumference = 2 * pi * `${radius}`;
document.getElementById('p1').innerHTML = `your circumference value is ${circumference}`;


// using html input method
submit.onclick = function() {
  const radius = Number(radiusInput.value); // get the value from input
  circumference = 2 * pi * radius;
  p2.textContent = circumference;
}

