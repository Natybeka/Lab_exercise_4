function add(numberArray) {
    var sum = 0;
    for(let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }
    return sum;
}

function subtract(number1, number2) {
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    return number1 - number2;
}

function multiply(numberArray) {
    var result = 1;
    for(let i = 0; i < numberArray.length; i++) {
        result *= numberArray[i];
    }
    return result;
}

function divide(number1, number2) {
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    return number1 / number2;
}


(function(){
   var choice = prompt("Enter the operation on the numbers: add, sub, mul or div ");
   if (choice === "add"){
       var numberSet = new Array();
       do {
            var entry = prompt("Enter a number or press x to stop:");
            if (entry != "x"){
                numberSet.push(parseInt(entry))
            }
       }while(entry != "x");
       console.log("The Sum is: " + add(numberSet));
   }
   else if(choice === "sub"){
        var number1 = prompt("Enter the first number:");
        var number2 = prompt("Enter the second number:");
        console.log("The Difference is: " + subtract(number1, number2));
   }
   else if(choice === "mul"){
        var numberSet = new Array();
        do {
             var entry = prompt("Enter a number or press x to stop:");
            if (entry != "x"){
                 numberSet.push(parseInt(entry))
            }
        }while(entry != "x");
        console.log("The Product is: " + multiply(numberSet));
   }
   else if(choice === "div"){
        var number1 = prompt("Enter the first number:");
        var number2 = prompt("Enter the second number:");
        console.log("The Quotient is: " + divide(number1, number2));
    }
})();