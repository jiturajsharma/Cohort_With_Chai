/*
Problem Statement

Create a BankAccount constructor that initializes:
        * A balance property representing the account balance.
        * A transactions array to log all deposit and withdrawal activities.
        
    

    -- Implement the following methods on the prototype:

    1. deposit(amount):
        * Increases the balance by the given amount. 
        * Adds a transaction log in the format:
                "Deposited X" (where X is the amount).
    2. withdraw(amount):
        * Decreases the balance by the given amount.
        * Prevenets overdraft(cannot withdraw if balance is unsufficient).
        * If withdrawal is successful, log: "withdrew X",
        * If balance is insufficient, log: "Insufficient balance".
    
    3. getTransactionHistory():
        * Return the list of all transactions as an array of strings in the order they occurred.

    
    Challenges:
        * Implement BankAccount constructor with balance and transactions.
        * Attach deposit(amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

*/


// You need to implement the BankAccount constructor function and its prototype methos 

function BankAccount(balance){
    this.balance = balance;
    this.transactions =  []
}

// define deposit method on BankAccount's prototype 

BankAccount.prototype.deposit = function(amount){
    this.balance +=amount
    this.transactions.push(`Deposited ${amount}`)
}

// Define withdraw method on BankAccount's prototype

BankAccount.prototype.withdraw = function(amount){
    if(this.balance - amount <0){
        this.transactions.push("Insufficient balance");
    }else{
        this.balance -= amount;
        this.transactions.push(`Withdraw ${amount}`);
    }
};

// Define getTransactionHistory metho on BanckAccount's prototype

BankAccount.prototype.getTransactionHistory = function(){
    return this.transactions;
}
