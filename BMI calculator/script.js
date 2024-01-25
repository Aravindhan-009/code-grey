const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function (){
    
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height == '' || weight == '') {
        alert("please enter the value")
        return
    }

    height = height/100;

    let bmi = (weight / (height*height));

    bmi = bmi.toFixed(2);

    document.getElementById("result").innerHTML = bmi;

    let status = '';

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if(bmi >= 18.5 && bmi < 25){
        status = "Healthy";
    }
    else if(bmi >= 25 && bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.querySelector(".comment").innerHTML= `Your are <span id="comment">${status}</span>`;

});