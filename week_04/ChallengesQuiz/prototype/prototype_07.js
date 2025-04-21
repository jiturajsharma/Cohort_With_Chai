/**
    Problem Statement

    Create an Employee constructor that initializes name, position, and salary. Implement:

    * applyBonus(percent): Increases the salry by the given percentage.

    Challenges:
        * Implement Employee constructor with name, position, and salary
        * Attach applyBonus(percentage) to the prototype to increase salary
 */



    // You need to implement the Employee constructor function and its prototype method

    function Employee(name, position, salary){
        this.name = name;
        this.position = name;
        this.salary = salary;
    }

    // Defien applyBonus method on Employee's prototype
    Employee.prototype.applyBonus = function(percent){
        this.salary = Math.round(this.salary + this.salary * (percent / 100));
    }
