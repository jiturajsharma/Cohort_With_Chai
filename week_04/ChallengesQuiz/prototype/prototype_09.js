/*
Probelm Statement:
    You are building a banking system where multiple bank accounts can exit. Each account has been accountName, holderName, and balance. Implement the follwoing methods.

    * deposit(amount): Adds money to the balance 
    * withdraw(amount): Deducts money but prevents overdraft.
    * transfer(amount, targetAccount): Transfers money from one account to another if the balance allows it.
    

    Challeges:
        *   Implement BankAccount constructor with accountName, holderName, and balance.
        * Attach desposit(amount), withdraw(amount), and transfer(amount, targetAccount) method to the prototype.

    */


    // You need to implement the BankAccount constructor

    function BankAccount(accountNumber, holderName, balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    // Define deposit method on BankAccount's prototype 

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

// Define withdraw method on BankAccount's prototype

BankAccount.prototype.withdraw = function(amount){
    if(this.balance >= amount){
        this.balance -= amount
    }
}

// Define transfer metho on BanckAccount's prototype

BankAccount.prototype.transfer= function(amount, targetAccount){
    if(this.balance >= amount){
        this.balance -= amount;
        targetAccount.deposit(amount)
    }
}