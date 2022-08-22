console.log("This is my first javascript");

//primitive types

// string
// Boolean
// number (int , doub)
// undefined
// null

//reference types
//  arrays
//  objects
//  function

let varaible_name = 45;
varaible_name = "javascript";

let test1;

const varaible1 = 34;
//varaible1 = true;

function test(num1, num2) {
  let result = num1 + num2;
  console.log("This is my second javascript", result);
}

const add = (num1, num2) => {
  let result = num1 + num2;
  console.log("This is my second javascript", result);
};

const sub = (num1, num2) => {
  let result = num1 - num2;
  console.log("This is my second javascript", result);
};

function perform(op1, op2, operation1) {
  operation1(op1, op2);
}

perform(1, 2, add);
perform(1, 2, sub);

const display = (result) => {
  console.log("Array Items", result);
};
//num(67, 23);

test(78, 34);

let colors = ["red", "blue", "green", 1, 2, 3, true];

colors.forEach((result) => {
  display(result);
});

let result2 = colors.map((result) => {
  return result + "...this is my element";
});

console.log(result2);

result2 = colors.filter((result) => {
  return typeof result === "boolean";
});

console.log(result2);

// object literal

let circle = {
    radius: 1,
    draw: function(num1) {
        console.log("draw");
    }
}

//dot notation
//bracket notation

console.log("circle object...", circle['radius']);

let circle1 = {
    radius: 2,
    draw: function(num1) {
        console.log("draw2");
    }
}

//factory method / funcion
//constructor function

function createCricle(radius) {
    //statements;

    return {
        radius,
        draw:function(){
            console.log("draw");
        }

    }
}

const circle_01 = createCricle(1);
circle_01.radius;
circle_01.draw();

const circle_02 = createCricle(2);
circle_01.radius;
circle_01.draw();

console.log(circle_02)

// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw circle", this.radius);
        return this.radius * this.radius;
    }
}

const another_circle = new Circle(1);
const another_circle_1 = new Circle(2);
const result_1 = another_circle.draw()
const result_2 = another_circle_1.draw()
console.log(result_1, result_2);

//class 

// class Circle {

//     constructor(radius) {
//         this.radius = radius;
//     }

//     draw() {
//         console.log(this.radius);
//     }

// }

// const class_1 = new Circle(1);
// class_1.draw();


//DOM
console.log(document.getElementById("carouselExampleControls"));

console.log(document.getElementsByClassName("search-form"));

const searchForm = document.querySelector("#search-form");

//click
//mouse events
//keypress events

searchForm.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
    if(!searchForm.checkValidity()){
        event.stopPropagation();
    } else {
        console.log("form ...", searchForm.elements);

        const text = searchForm.elements["searchText"].value
        console.log("the value of the text", text);

    }
    searchForm.classList.add("was-validated");
});


const google_div = document.querySelector("#google");
google_div.innerHTML = `
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
`;



const signup = document.querySelector("#signup-form-1");

signup.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
    if(!signup.checkValidity()){
        event.stopPropagation();
    } else {
        console.log("form ...", signup.elements);

         const text = signup.elements["validationCustom01"].value
         const text_1 = signup.elements["validationCustom02"].value
         console.log("the value of the text", text);

    }
    signup.classList.add("was-validated");
});


//module 1
custom1.js

export default function test()

custom2.js
import test from "custom1.js"


