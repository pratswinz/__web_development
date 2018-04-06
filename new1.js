//-----------------------------------------------------------------------------1

"use strict";

class NoConstructor { 
    /* JavaScript inserts something like this:
     constructor () { }
    */
}

const nemo = new NoConstructor(); // Works, but pretty boring



//-----------------------------------------------------------------------------2

//Assigning a class to a variable is called a class expression, and is an alternative to the above syntax:

// This is a named class expression -- you /can/ refer to this class by name within the class body . . . 
const Food = class FoodClass {
    // Class definition is the same as before . . . 

    //  Adding new method, to demonstrate we can refer to FoodClass by name
    //   within the class . . . 
    printMacronutrients () {
      console.log(`${FoodClass.name} | ${FoodClass.protein} g P :: ${FoodClass.carbs} g C :: ${FoodClass.fat} g F`)
    }
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
chicken_breast.printMacronutrients(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'


// . . . But /not/ outside of it
try {
    console.log(FoodClass.protein); // ReferenceError 
} catch (err) { 
    // pass
}

----------------------------------------------------------------------------------3

//Classes created with extends are called subclasses, or derived classes. Using them is straightforward. Building on our Food example:

"use strict";

// FatFreeFood is a derived class
class FatFreeFood extends Food {

    constructor (name, protein, carbs) {
        super(name, protein, carbs, 0);
    }

    print () {
        super.print(); 
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print(); // 'Greek Yogurt | 26g P :: 16g C :: 0g F  /  Would you look at that -- Greek Yogurt has no fat!'

//--------------------------------------------------------------------------------4

//Classes created with extends are called subclasses, or derived classes. Using them is straightforward. Building on our Food example:

"use strict";

// FatFreeFood is a derived class
class FatFreeFood extends Food {

    constructor (name, protein, carbs) {
        super(name, protein, carbs, 0);
    }

    print () {
        super.print(); 
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print(); // 'Greek Yogurt | 26g P :: 16g C :: 0g F  /  Would you look at that -- Greek Yogurt has no fat!'

/*Everything we discussed above regarding base classe holds true for derived classes, but with a few additional points.

Subclasses are declared with the class keyword, followed by an identifier, and then the extends keyword, followed by an arbitrary expression.

This will generally just be an identifier, but could, in theory, be a function.
 
If your derived class needs to refer to the class it extends, it can do so with the super keyword.

A derived class can't contain an empty constructor. Even if all the constructor does is call super(), you'll still have to do so explicitly. 

It can, however, contain no constructor.

You must call super in the constructor of a derived class before you use this.*/

/*
In JavaScript, there are precisely two use cases for the super keyword.

Within subclass constructor calls. If initializing your derived class requires you to use the parent class's constructor, you can call super(parentConstructorParams[ ) within the subclass constructor, passing along any necessary parameters.
To refer to methods in the superclass. Within normal method definitions, derived classes can refer to methods on the parent class with dot notation: super.methodName.
Our FatFreeFood demonstrates both use cases:

In the constructor, we simply call super, passing along 0 as our quantity of fat.
In our print method, we first call super.print, and add additional logic after.
Believe it or not, that wraps up the basic syntactical overview of class; this is all you need to start experimenting.
*/

//-----------------------------------------------------------------------------------5

"use strict";

function Food (name, protein, carbs, fat) {
    this.name    = name;
    this.protein = protein;
    this.carbs    = carbs;
    this.fat          = fat;
}

// Calling Food with 'new' is a "constructor call", and results in its returning an object 
const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
console.log(chicken_breast.protein) // 26

// Failing to call Food with 'new' results in its returning 'undefined'
const fish = Food('Halibut', 26, 0, 2);
console.log(fish); // 'undefined'

/*
When you call a function with new, four things happen under the hood:

A new object gets created (let's call it O);
O gets linked to another object, called its prototype;
The function's this value is set to refer to O;
The function implicitly returns O.
It's between steps three and four that the engine executes your function's specific logic.
*/



