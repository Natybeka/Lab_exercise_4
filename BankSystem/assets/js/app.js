var BankAccount = function(accountNumber, balance) {
    var obj = {};
    obj.accountNumber = accountNumber;
    obj.balance = parseInt(balance);

    obj.deposit = function(number) {
        obj.balance += parseInt(number);
    };

    obj.withdraw = function(number) {
        if (number <= obj.balance){
            obj.balance -= number;
            return true;
        }
        return false;
    };

    return obj;
}

var account1 = BankAccount("accno1", 10000);
var account2 = BankAccount("accno2", 40000);
var account3 = BankAccount("accno3", 60000);
var bank = [account1, account2, account3];

function searchAccount(accountNumber) {
    for(let i = 0; i < bank.length; i++) {
        if (bank[i].accountNumber === accountNumber){
            return i;
        }
    }
    return -1;
}

// Starter function
(function(){
    var accountNumberIndex = -1;
    var accountNo = prompt("Please enter your account Number:");
   
    
    do{
        accountNumberIndex = searchAccount(accountNo);
        if (accountNumberIndex == -1) {
            accountNo = prompt("Account number not found, Please enter a valid account number:");
        }
        
    }while(accountNumberIndex == -1);
    
    var choice = "-1";
    do  {
        choice = prompt("Please enter the operation you want to perform on your account\n1. Deposit into Account\n2. Withdraw an amount\n3. Transfer funds\n4. Check balance\n5. Quit");
        if (choice == "1") {
            var amount = prompt("Please Enter the amount to deposit:");
            bank[accountNumberIndex].deposit(amount);
            window.alert("Amount added succesfully\nAccount Balance: " + bank[accountNumberIndex].balance);
        }
    
        else if (choice == "2") {
            var amount = prompt("Please Enter the amount to withdraw:");
            if (bank[accountNumberIndex].withdraw(amount) != false) {
                window.alert("Amount withdrawn succesfully\nAccount Balance: " + bank[accountNumberIndex].balance);
            }
            else {
                window.alert("Account Overdrawn!");
            }
        }
    
        else if (choice == "3") {
            var accountTransfer = prompt("Please Enter the account Number to transfer to: ");
            var accountTransferIndex = searchAccount(accountTransfer);
            if(accountTransferIndex == -1) {
                alert("Account Not Found!");
            }
            else {
                var amount = prompt("Please Enter the transfer amount");
                var validTransfer = bank[accountNumberIndex].withdraw(amount);
                
                if (validTransfer == false) {
                    alert("Account Overdrawn!");
                }
                else {
                    bank[accountTransferIndex].deposit(bank[accountNumberIndex].withdraw());
                    alert("Transfer Completed!\nAccount Balance: " + bank[accountNumberIndex].balance);
                }   
            }

        }

        else if (choice == "4") {
            alert("Account Balance: " + bank[accountNumberIndex].balance);
        }

        else if (choice == "5") {
            alert("Thank you for using our service!\nGoodbye");
        }

        else {
            alert("Please Enter a proper function number.");
        }

    } while(choice != "5");
})();

