function add(numberArray) {
    var sum = 0;
    for(let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }
    return sum;
}

function subtract(number1, number2) {
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
    if(number2 === 0) {
        return Infinity;
    }
    else {
        return number1 / number2;
    }
}

(function(){
    do {
        var choice = prompt("Enter the operation on the numbers:\n1. Addition\n2. Subtraction\n3. Muliplication\n4. Division\n5. Exit");
        if (choice === "1"){
            var numberSet = new Array();
            do {
                 var entry = prompt("Enter a number or press x to stop:");
                 if (entry != "x"){
                     numberSet.push(parseInt(entry));
                 }
            }while(entry != "x");
            alert("The Sum is: " + add(numberSet));
        }
        else if(choice === "2"){
             var number1 = prompt("Enter the first number:");
             var number2 = prompt("Enter the second number:");
             alert("The Difference is: " + subtract(number1, number2));
        }
        else if(choice === "3"){
             var numberSet = new Array();
             do {
                  var entry = prompt("Enter a number or press x to stop:");
                 if (entry != "x"){
                      numberSet.push(parseInt(entry));
                 }
             }while(entry != "x");
             alert("The Product is: " + multiply(numberSet));
        }
        else if(choice === "4"){
             var number1 = prompt("Enter the first number:");
             var number2 = prompt("Enter the second number:");
             alert("The Quotient is: " + divide(number1, number2));
        }
        else if (choice == "5") {
            alert("Thank Your for using our services!");
        }
        else {
            alert("Please enter a valid operation");
        }
    }while(choice != "5");
})();