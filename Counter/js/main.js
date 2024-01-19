//~ ===================================================================== ~
//^ ======================== JavaScript Document ======================== ^
//& ==================== Author Name: Gehad M. Aqel ===================== &
//? ==================== Source: [Elzero Web School] ==================== ?
//~ ===================================================================== ~

/*
TODO: Output To Screen:
    [1] window.alert();
    [2] document.write();
    [3] console.log();
*/

// document.write("<h1>Hello From JS</h1>");
// console.log("Hello From JS");

//~ ===================================================================== ~

/*
TODO: Console methods & styling & web API:
    [console]:
        .log();
        .error();
        .table();

    [Styling Console]
        Directive %c

    [Web API]
        Application Programming Interface
*/

// console.error("error from JS");
// console.table("Gehad", "Osama", "Ahmed");
// console.log("%cConsole log %cStyling", "color: red; font-size: 20px", "color: blue; font-size: 25px");

//~ ===================================================================== ~

/*
TODO: Data Types & [typeof] operator:
    [1] String
    [2] number
    [3] array => object
    [4] object
    [5] boolean => true/false
    [6] undefined
    [7] null => object
*/

// console.log(typeof "Gehad Aqel"); //* String

// console.log(typeof 3000); //* number
// console.log(typeof 3000.99); //* 

// console.log(typeof [22, 50, 11, 25]); //* array => object
// console.log(typeof ["Ge", "Mo", "Aq"]); //* array => object

// console.log(typeof {
//     name: 'Gehad', 
//     Age: 22,
//     country: "Ye"
// }); //* object | key, value

// console.log(typeof true); //* boolean
// console.log(typeof false); //* boolean

// console.log(typeof undefined); //* undefined
// console.log(typeof null); //* object

//~ ===================================================================== ~

/*
TODO: Variables Intro:
    [Syntax]:
        keyword | variable name | assign operator | variable value;
    
    [Loosely type VS Strongly type]: JS is loosely type
*/

// var userName = "Gehad M. Aqel"; // Declare
// console.log(userName);

// console.log(forjs);
// forjs.innerHTML = "hello from JS";

//~ ===================================================================== ~

/*
TODO: String sysntax & escapes:
    - \n
    - \
*/

// console.log("Elzero \\Web School");
// console.log('Elzero Web \n\'School\'');

//~ ===================================================================== ~

/*
TODO: Concatenation: Template Literals
*/

// var a = "Gehad",
//     b = "Aqel";
// console.log(a, b);
// document.write(a+ " " +b);

// var g = "gehad",
//     m = "mohammed",
//     a = "aqel";
    
// console.log(`${g} "${m}" ${a}`);

// let title = "elzero";
// let dec = "elzero web school";

// var myDiv = `
// <div class="myDivJS">
// <h1>${title}</h1>
// <p>${dec}</p>
// </div>`;

// document.write(myDiv);

//~ ===================================================================== ~

/*
TODO: Arithmetic Operators | Unary Plus | Type Coercion
    [+] Addition
    [-] Subtraction
    [*] Multiplication
    [/] Division
    [**] Exponentiation
    [%] Moduls (Division Remainder)
    [++] Increment
    [--] Decrement

    varName += varName;
*/

// //* [+] Addition
// console.log(10 + 20);
// console.log(10 + "Gehad");

// //* [-] Subtraction 
// console.log(10 - 20);
// console.log(10 - "Gehad"); //! NaN(Not a Number)

// //* [*] Multiplication
// console.log(10 * 20);
// console.log(10 * -20);

// //* [/] Division
// console.log(50 / 5);
// console.log(15 / 2);

// //* [**] Exponentiation
// console.log(2 ** 4); //* 2 x 2 x 2 x 2 = 16

// //* [%] Moduls (Division Remainder)
// console.log(10 % 2); //* 0
// console.log(11 % 2); //* 1
// console.log(35 % 2); //* 1

// //* [++] Increment & [--] Decrement
// var num = 1;
// num++; //& Post increment: print the value then add the new value
// console.log(num);
// ++num; //& Pre increment
// console.log(num);

//~ ===================================================================== ~

/*
TODO: Number:
    [Number]:
        - Double Precision
        - Syntactic Sugar '_'
        - e
        - **
        - BigInt

    [1] toString();
    [2] toFixed();
    [3] parseInt();
    [4] parseFloat();
    [5] isInteger();
    [6] isNaN();
*/

// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

//~ ===================================================================== ~

/*
TODO: Math Object:
    [1] round();
    [2] ceil();
    [3] floor();
    [4] min();
    [5] max();
    [6] pow();
    [7] random();
    [8] trunc();
*/

// //* [1] round();
// console.log(Math.round(99.4)); //* 99
// console.log(Math.round(99.5)); //* 100

// //* [2] ceil(); & [3] floor(;)
// console.log(Math.ceil(99.4)); //* 100
// console.log(Math.floor(99.4)); //* 99

// //* [4] min(); & [4] max();
// console.log(Math.min(10, 20, 22, -32, 7, 5, -25, -3)); //* -32
// console.log(Math.round(99.5)); //* 100

// //* [6] pow();
// console.log(Math.pow(2, 4)); //* 16

// //* [7] random();
// console.log(Math.random()); //* random

// //* [8] trunc();
// console.log(Math.round(99.5)); //* 100 removes the decimals

//~ ===================================================================== ~

/*
TODO: String Methods:
*/

// let theName = "  Gehad  ";
// console.log(theName[3]); //* G letter
// console.log(theName.charAt(3)); //* G
// console.log(theName.length); //* 5
// console.log(theName.trim());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());

// let a = "Elzero Web School";
// console.log(a.indexOf("Web")); //* 7
// console.log(a.indexOf("web")); //* -1
// console.log(a.indexOf("o")); //* 5
// console.log(a.lastIndexOf("o")); //* 15
// console.log(a.slice(2, 6));
// console.log(`${a.repeat(2)}`);
// console.log(a.split(" ")); //* ["Elzero", "Web", "School"];
// console.log(a.split("")); //* ['E', 'l', 'z', 'e', 'r', 'o', 'W' 'e' 'b', 'S' 'c' 'h' 'o' 'o', 'l'];

//~ ===================================================================== ~

/*
TODO: Nested if: Conditional Ternary 
    [Syntax]:
        Condition ? if true : if false
*/

// let theName = "Mona",
//     theGender = "female",
//     theAge = 30;

// if(theGender === "male"){
//     console.log("Mr");
// }else{
//     console.log("Mrs");
// }

// theGender === "male" ? "Mr" : "Mrs";

// theAge < 20 ? console.log(20) 
// : theAge > 20 && theAge < 60 ? console.log("20 to 60") 
// : theAge > 60 ? console.log("Larger than 60") 
// : console.log("Unknown");

//~ ===================================================================== ~

/*
TODO: Switch: 
    [Syntax]:
        switch(){
            case 1:
                code
            break;

            case 2:
                code
            break;

            case 3:
                code
            break;
        }
*/

// let theDay = 6;
// switch(theDay){
//     case 1:
//     case 2:
//     case 3:
//         console.log("Saturday")
//         break;
//     case 4:
//         console.log("Tuesday")
//         break;
//     case 5:
//         console.log("Wendsday")
//         break;
//     case 6:
//         console.log("thursday")
//         break;
//     case 7:
//         console.log("friday")
//         break;
//     default:
//         console.log("unknown day");
// }

//~ ===================================================================== ~

/*
TODO: Array:
    [0, 1, 2, 3]

    [unshift("", "")] add to the first
    [push("", "")] add to the end
    [shift()] remove from the first
    [pop()] remove from the last

    [searching inside the array]:
        - indexOf(search element, from);
        - lastIndexOf(search element, from);
        - includes(value to find, fromIndes);

    [sorting]:
        - sort();
        - reverse();

    [slicing]:
        - slice(start, end - not including the end);
            slice() => all array
        - splice(start, delete count, item to add);
    
    [joining arrays]:
        - concat(array, array) => new array
        - join(separator);
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// code here
for(let i = zero; i < counter; i++){
    my.pop();
}
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(zero, counter)); // ["Elham", "Mazero"]

console.log(); // ["Elzero"]

// console.log(); // ["rO"]
