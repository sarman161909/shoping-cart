document.getElementById('case-plus').addEventListener('click', function(){
    const input=document.getElementById('case-number');
    const inputNumber=parseInt(input.value);
    input.value=inputNumber + 1;  
})
document.getElementById('case-minus').addEventListener('click', function(){
    const input=document.getElementById('case-number');
    const inputNumber=parseInt(input.value);
    if(inputNumber > 0){
        input.value=inputNumber - 1;
    }    
})
