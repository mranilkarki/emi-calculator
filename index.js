
document.querySelector('#find').addEventListener('click',(e)=>{
    e.preventDefault();
    var loan=document.getElementById('amount').value;
    var interestRate=document.getElementById('apr').value;
    var tenure=document.getElementById('tenure').value;

    var noOfMonths=Math.floor(tenure)*12;
    var monthlyRate=interestRate/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths)
    var denominator=onePlusR-1;
    var emi=loan*monthlyRate*(onePlusR/denominator);
    var output=document.getElementById('EMICapt');
    output.innerHTML=emi;
  
})