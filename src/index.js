var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
//type casting - here exclamation mark is used for typecast.
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//let output=document.getElementsByClassName("ans");
var sum = function (a, b) {
    return a + b;
};
button1.addEventListener("click", function () {
    alert(sum(+input1.value, +input2.value));
}); //This gives a concatinate string of num 1 and num2 and not a sum ;
//but we can rectify it by using some more line of codes
var minus = function (a, b) {
    return a - b;
};
button2.addEventListener("click", function () {
    alert(minus(+input1.value, +input2.value));
});
