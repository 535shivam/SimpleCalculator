let currentValue='';
document.getElementById('#display').value =currentValue;

function buttonC(){
currentValue='';document.querySelector('#display').value=currentValue;
}

function buttonPlus(){    currentValue=currentValue+'+';document.querySelector('#display').value=currentValue;
}
    

function buttonMinus(){    currentValue=currentValue+'-';document.querySelector('#display').value=currentValue;
}


function buttonMultiplication(){    currentValue=currentValue+'*';document.querySelector('#display').value=currentValue;
}


function buttonDivide(){    currentValue=currentValue+'/';document.querySelector('#display').value=currentValue;
}

function buttonEqual(){    currentValue=eval(currentValue);document.querySelector('#display').value=currentValue;
}











function button1(){    currentValue=currentValue+'1';document.querySelector('#display').value=currentValue;
 }

 function button2(){    currentValue=currentValue+'2';document.querySelector('#display').value=currentValue;
 }

 function button3(){    currentValue=currentValue+'3';document.querySelector('#display').value=currentValue;
 }

 function button4(){    currentValue=currentValue+'4';document.querySelector('#display').value=currentValue;
 }

 function button5(){    currentValue=currentValue+'5';document.querySelector('#display').value=currentValue;
 }

 function button6(){    currentValue=currentValue+'6';document.querySelector('#display').value=currentValue;
 }

 function button7(){    currentValue=currentValue+'7';document.querySelector('#display').value=currentValue;
 }

 function button8(){    currentValue=currentValue+'8';document.querySelector('#display').value=currentValue;
 }

 function button9(){    currentValue=currentValue+'9';document.querySelector('#display').value=currentValue;
 }

 function button0(){    currentValue=currentValue+'0';document.querySelector('#display').value=currentValue;
 }

 function buttonDecimal(){    currentValue=currentValue+'.';document.querySelector('#display').value=currentValue;
 }