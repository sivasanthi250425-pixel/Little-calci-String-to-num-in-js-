const form=document.getElementById('form');
const num1input=document.getElementById('num1');
const num2input=document.getElementById('num2');
const resulttext=document.getElementById('result');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const num1val=Number(num1input.value);
    const num2val=Number(num2input.value);

    resulttext.innerText=`${num1val}+${num2val}=${num1val+num2val}`;

    



})
