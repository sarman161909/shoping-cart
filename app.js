function updateNumber(product,price,incrising){
    const input=document.getElementById(product+'-number');
    let inputNumber=parseInt(input.value);
    if(incrising== true){
        inputNumber=inputNumber + 1;  
    }
    else if ((inputNumber > 0)){
        inputNumber=inputNumber - 1;
    }
    input.value=inputNumber;
    const casetotal=document.getElementById(product+'-total');
    casetotal.innerText=parseInt(inputNumber * price);
    /// Calculate Total//
    totalUpdate()
}
document.getElementById('case-plus').addEventListener('click', function(){
  updateNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59,false)    
})
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone',1219,true)    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone',1219,false)    
})

function totalUpdate(){
    const phoneinput=document.getElementById('phone-number').value;
    const phoneNumber= parseInt(phoneinput * 1219)

    const caseinput=document.getElementById('case-number').value;
    const caseNumber=parseInt(caseinput*59);
    const subtotal=phoneNumber + caseNumber;
    const tax= subtotal / 10;
    const totalPrice= subtotal + tax;
    document.getElementById('sub-total').innerText=subtotal;
    document.getElementById('tax').innerText=tax
    document.getElementById('total-price').innerText=totalPrice;
}