let BankAccount = {
    accountNumber : "",
    balance : 0,
    deposit : function(number) {
        this.balance += number;
    },

    withdraw : function(number) {
        if (number <= this.balance){
            this.balance -= number;
        }
        return false;
    }
}

var account1 = new BankAccount();
account1.deposit(10000);
account1.accountNumber = "accno1";

var account2 = new BankAccount();
account2.deposit(40000);
account2.accountNumber = "accno2";

var account3 = new BankAccount();
account3.deposit(60000);
account3.accountNumber = "accno3";

var bank = [account1, account2, account3];

function transfer(accountNumber1, accountNumber2, amount) {
    var accountOneValid = false;
    var accountTwoValid = false;
    var accountOneIndex = -1;
    var accountTwoIndex = -1;

   for(let i = 0; i < bank.length; i++) {
        if (bank[i].accountNumber === accountNumber1) {
            accountOneValid = true;
            accountOneIndex = i;
        }
        if (bank[i].accountNumber === accountNumber2) {
            accountTwoValid = true;
            accountTwoIndex = i;
        }
   }
    
    if (accountOneValid === true && accountTwoValid == true) {
        bank[accountTwoIndex].deposit(bank[accountOneIndex].withdraw);
    }

    else console.log("Please Enter valid account Numbers")
}

function searchAccount(accountNumber) {
    for(let i = 0; i < bank.length; i++) {
        if (bank[i].accountNumber === accountNumber){
            return true;
        }
    }
    return false;
}

// Starter function
(function(){
    var isValidNumber = false;
    var accountNo = prompt("Please enter your account Number:");
    do{
        isValidNumber = searchAccount(accountNo);
        if (!isValidNumber) {
            accountNo = prompt("Account number not found, Please enter a valid account number:");
        } 
    }while(isValidNumber == false);
    
    var choice = "-1"
    do  {
        choice = prompt("Please enter the operation you want to perform on your account/n1. Deposit into Account/n2. Withdraw an amount/n3. Transfer funds/n4. Check balance/n5. Quit");
        if (choice == "1") {

        }
    
        else if (choice == "2") {
    
        }
    
        else if (choice == "3") {

        }

        else if (choice == "4") {

        }

    } while(choice != "5");
})();