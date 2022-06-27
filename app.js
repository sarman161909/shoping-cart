function updateNumber(incrising){
    const input=document.getElementById('case-number');
    let inputNumber=parseInt(input.value);
    if(incrising== true){
        inputNumber=inputNumber + 1;  
    }
    else if ((inputNumber > 0)){
        inputNumber=inputNumber - 1;
    }
    input.value=inputNumber;
    const casetotal=document.getElementById('case-total');
    casetotal.innerText=parseInt(inputNumber * 59);
    
}
document.getElementById('case-plus').addEventListener('click', function(){
  updateNumber(true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber(false)
     
})
