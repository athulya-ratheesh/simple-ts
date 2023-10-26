var button1=document.getElementById("button1")! as HTMLButtonElement;
var button2=document.getElementById("button2")! as HTMLButtonElement;
//type casting - here exclamation mark is used for typecast.
var input1=document.getElementById("num1")! as HTMLInputElement;
var input2=document.getElementById("num2")! as HTMLInputElement;
//let output=document.getElementsByClassName("ans");

var sum=(a:number,b:number)=>{
    
    return a+b;
};
button1.addEventListener("click",()=>{
    alert(sum(+input1.value,+input2.value))
});//This gives a concatinate string of num 1 and num2 and not a sum ;
//but we can rectify it by using some more line of codes
var minus=(a:number,b:number)=>{
   
        return a-b;
   
}
button2.addEventListener("click",()=>{
    alert(minus(+input1.value,+input2.value));
})