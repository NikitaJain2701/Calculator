// CI 
var output_CI = document.querySelector("#output_CI");
var principle_CI = document.querySelector("#principle_CI");
var time_CI = document.querySelector("#time_CI");
var rate_CI = document.querySelector("#rate_CI");
var n_CI = document.querySelector("#n_CI");
var calculate_CI = document.querySelector(".calculate_CI");
console.log(principle_CI);
console.log(time_CI);
console.log(rate_CI);
console.log(n_CI);
console.log(output_CI);

calculate_CI.addEventListener('click',function calculate_CI(){
    var CI = principle_CI.value*(Math.pow((1 + (rate_CI.value/n_CI.value)), (n_CI.value*time_CI.value)))-principle_CI.value;
    output_CI.innerText = "Your Compound Interest is: " + CI; 
})

