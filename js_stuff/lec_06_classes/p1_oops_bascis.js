// Basics of oops in js
class Human{
    // let's first make a class without a constructor

    // attributes or properties
    // we dont use let or const keyword here
    age = 0;
    weight = 10;
    height = 180;
    
    // private attributes, just put a hasthag
    #bankAccountNum = 56872134124n;
    #bankBalance = 1465.13;

    // private attributes are only accessible within the class
    // or by a member function of class
    
    // creating getters and setters for pvt attributes (encapsulation)
    // we dont use function keyword here
    // and use this keyword to point to the current object
    showBankDetails(){
        console.log("Bank account number: " + this.#bankAccountNum);
        console.log("Bank balance: " + this.#bankBalance);
    }

    setBankAccountNum(bNum){
        this.#bankAccountNum = bNum;
    }
    setBankBalance(bBalance){
        this.#bankBalance = bBalance;
    }
}

// class with a constructor
// note: js doesn't support constructor overloading
class Programmer{
    #favLang = "";
    #skilled = false;
    #exp = 0;

    // use constructor keyword to define one
    constructor(favLang, skilled, exp){
        this.#favLang = favLang;
        this.#skilled = skilled;
        this.#exp = exp;
    }

    showDetails(){
        console.log("Favorite languages: " + this.#favLang);
        console.log("Skilled or not: " + this.#skilled);
        console.log("Experience: " + this.#exp);
    }
}

// Creating object of human class
let hObj = new Human();
hObj.setBankAccountNum(34566435334n);
hObj.setBankBalance(9999);
console.log("Details of human:");
hObj.showBankDetails();


console.log();
// Creating object of programmer class
let pObj = new Programmer("Python", true, 2);
console.log("Details of programmer:");
pObj.showDetails();
