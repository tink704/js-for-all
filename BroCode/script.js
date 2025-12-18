const numberInput = document.getElementById("numberInput");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

  let age ;

submit.onclick = function() {
  age = numberInput.value;
  age = Number(age);

    if(age >= 18){
        result.textContent = "you are old enough to enter this site."
    } else if (age < 0){
       result.textContent =" you haven't been born yet."
    } else if(age > 100){
        result.textContent ="you are too old to enter this site."
    } else{
        result.textContent ="you must be 18+ to enter this site."
    }
}

        