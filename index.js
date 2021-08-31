// console.log("hello");
// var name = prompt("what is your name?");
// alert("hello this is" + name);

// SI 
var output_SI = document.querySelector("#output_SI");
var principle_SI = document.querySelector("#principle_SI");
var rate_SI = document.querySelector("#rate_SI");
var time_SI = document.querySelector("#time_SI");
var calculate_SI = document.querySelector(".calculate_SI");
console.log(principle_SI);

calculate_SI.addEventListener('click',function calculate_SI(){
    var SI = (principle_SI.value*rate_SI.value*time_SI.value)/100;
    output_SI.innerText = "Your Simple Interest is: " + SI;
}
)

// // CI 
// var output_CI = document.querySelector("#output_CI");
// var principle_CI = document.querySelector("#principle_CI");
// var time_CI = document.querySelector("#time_CI");
// var rate_CI = document.querySelector("#rate_CI");
// var n_CI = document.querySelector("#n_CI");
// var calculate_CI = document.querySelector(".calculate_CI");
// console.log(principle_CI);

// // calculate_CI.addEventListener('click',
// function calculate_CI(){
//     var CI = math.pow(1 + rate_CI.value/n_CI.value, n_CI.value*time_CI.value)*principle_CI.value;
//     output_CI.innerText = "Your Compound Interest is: " + CI;
// })
