let account1 = {
    accountNumber : "accno1",
    balance : 10000,
    deposit : function(number) {
        this.balance += number;
    },

    withdraw : function(number) {
        this.balance -= number;
    }
}

let account2 = {
    accountNumber : "accno2",
    balance : 20000,
    deposit : function(number) {
        this.balance += number;
    },

    withdraw : function(number) {
        this.balance -= number;
    }
}

let account3 = {
    accountNumber : "accno3",
    balance : 30000,
    deposit : function(number) {
        this.balance += number;
    },

    withdraw : function(number) {
        this.balance -= number;
    }
}

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

