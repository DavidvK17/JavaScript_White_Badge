"use strict"

// Scope

let globalScope = (one) => console.log( one + two);
let two = 2;

globalScope(1);

let functionScope = () => {
    let func = "function scope";
    console.log(func);
}

functionScope();

let blockScope = () => {
    if(true){
        let b = 10;
        const c = 20;
        console.log(b);
        console.log(c);
    }
}

blockScope();






// Lexical Scople
let a = 5;

let outerFunc = () => {
  let innerFunc = () => console.log(a); //5
  innerFunc();
}

outerFunc();







// Hoisting

console.log(hoisted);
hoisted = 1;
var hoisted;
console.log(hoisted);



// Debugging Chrome Dev Tools
/* Copyright 2016 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */
let onClick = () => {
    if (inputsAreEmpty()) {
      label.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    updateLabel();
  }

  let inputsAreEmpty = () => {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }

  let updateLabel = () => {
    let addend1 = getNumber1();
    let addend2 = getNumber2();
    let sum = addend1 + addend2;
    console.log(sum);
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  }

  let getNumber1 = () => {
    return inputs[0].value;
  }

  let getNumber2 = () => {
    return inputs[1].value;
  }

  let inputs = document.querySelectorAll('input');
  let label = document.getElementById('sum');
  let button = document.querySelector('button');
  button.addEventListener('click', onClick);



  // Selecting DOM Elements

  let queries = document.getElementsByClassName("query");
  console.log(queries);

  // Traversing DOM Elements
  // Match
  let matches = document.getElementsByClassName("query");
  for(let match of matches) {
    console.log(match.matches(".query"));
  }

  // Parent
let dt = document.getElementById("query");
let parent = dt.parentNode;
console.log(parent);

// Siblings
let previous = dt.previousElementSibling;
console.log(previous);
let next = dt.nextElementSibling;
console.log(next);


// Children
let el = document.querySelector("article");
let firstChild = el.firstChild;
let lastChild = el.lastChild;

console.log(firstChild, lastChild);


// DOM Manipulation
// create element
let element = document.createElement('div');
element.innerHTML = `<p>Hello World!</p>`;
document.body.appendChild(element)

// replace element
let originalEl = document.getElementById("test1");

let newEl = document.createElement('p');
newEl.innerHTML = 'This is new text';
originalEl.parentNode.replaceChild(newEl, originalEl);


// empty element's content
let empty = document.getElementById("empty");
empty.innerHTML = '';

// remove element
let remove = document.getElementById("remove");
remove.parentElement.removeChild(remove);

// insert element after another

let insertAfter = (el, referenceNode) => referenceNode.parentNode.insertBefore(el, referenceNode.nextElementSibling); 

let insertEl = document.createElement('div');
insertEl.innerHTML = `<p>Hello again!</p>`;

let ref = document.querySelector('div.before');
insertAfter(insertEl, ref);

// get text content of an element
let getText = document.getElementById("getText");
let thisText = getText.innerHTML;
console.log(thisText);
// set text content of an element
getText.innerHTML = `Now you're different`;
thisText = getText.innerHTML;
console.log(thisText);

// Append or prepend to an element
let firstText = document.getElementById("firstText");
firstText.innerHTML += `<p>Second Text.</p>`;

// Wrap HTML Structure around element
let elementWrapped = document.getElementById("wrap_me");
let wrapper = document.createElement("div");
elementWrapped.parentNode.insertBefore(wrapper, elementWrapped);
wrapper.appendChild(elementWrapped);

// Clone Element
let cloneMe = document.getElementById("clone_me");
let clone = cloneMe.cloneNode(true);
console.log(clone);

// iterating over list of selected items
let listItems = document.querySelectorAll(".list_item");
console.log(listItems);

listItems.forEach((val,i)=> val.style.color = "green");


// Set, get and remove properties of DOM elements
let link = document.getElementById("anchor");
console.log(anchor.href);
if(link.title != "foo") link.title = "foo";

let input = document.querySelector("input[type='text']");
input.value = "Hello";




// Events
let btn = document.getElementById("btn");

// function to generate random Integer
let getRandom = (n) => Math.floor(Math.random() * (n+1));

// Function to generate random background color
let setCol = (e) => {
  const bckgCol = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
  e.target.style.backgroundColor = bckgCol;
}

// Event Listener
btn.addEventListener("click", setCol);


// Event objects
let inputEl = document.getElementById("input_event");
let outputEl = document.getElementById("output");

// Function to generate output
let write = (e) => {
  outputEl.textContent = `You wrote "${e.key}".`;
}

// Event Listener
inputEl.addEventListener("keydown", write);


// Prevent Event Default
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let submit = document.getElementById("submit");
let error = document.getElementById("error");

// Function to generate message
let message = (e) => {
  e.preventDefault();
  fname.value === '' || lname.value === '' ? error.textContent = `Please fill in both fields` : error.textContent = `Your full name is ${fname.value} ${lname.value}`
}

// Event Listener
submit.addEventListener("click", message);


// Event bubbling and capture
// setting listener on parent
let container = document.getElementById("container");
let outputOne = document.getElementById("output__one");

// Function to generate output
let genOutput = (e) => outputOne.textContent += `You've clicked on a ${e.currentTarget.tagName} element \n`;

// Event Listener
container.addEventListener("click", genOutput);



// Bubbling example
let containerTwo = document.getElementById("container__two");
let btnTwo = document.getElementById("btn__two");
let outputTwo = document.getElementById("output__two");

// Function to generate output
let genOutPutTwo = (e) => outputTwo.textContent += `You've clicked on a ${e.currentTarget.tagName} element \n`;

// Event Listener
// document.body.addEventListener("click", genOutPutTwo);
containerTwo.addEventListener("click", genOutPutTwo);
btnTwo.addEventListener("click", genOutPutTwo);


// Event Delegation
let tileCon = document.getElementsByClassName("tile__container")[0];

// function to generate random Int
let getRanInt = (n) => Math.floor(Math.random()*(n+1));

// Function to generate random Background Color for each tile
let genTileBckg = (e) => {
  const tileCol = `rgb(${getRanInt(255)}, ${getRanInt(255)}, ${getRanInt(255)})`;
  e.target.style.backgroundColor = tileCol;
}

// Event Listener
tileCon.addEventListener("click", genTileBckg);


// for loop
let musicTypes = document.getElementById("musicTypes");
let musicBtn = document.getElementById("music__btn");
let numOpt = document.getElementById("num__opt");

// Function counting options selected
let howMany = (selectObject) => {
  let numberSelected = 0;

  for(let i = 0; i < selectObject.options.length; i++) {
    if (musicTypes.options[i].selected){
      numberSelected++
    }
  }
  return numberSelected;
}

// Function preventing default & logging number of selected options to console
let logToConsole = (e) => {
  e.preventDefault();
  let n;
  howMany(musicTypes) === 1 ? n = "option" : n = "options";
  return numOpt.textContent = `You have selected ${howMany(musicTypes)} ${n}.`;
}

// Event Listener
musicBtn.addEventListener("click", logToConsole);


// do while loop
let index = 0;

do {
  index++;
  console.log(index);
} while (index < 5)


// while loop
let x = 0;
let y = 0;

while (x < 3) {
  x++;
  y += x;
  console.log(x, y);
}

// for..in loop
const object = {
  a:1,
  b:2,
  c:3
}

for(let property in object){
  console.log(`${property}:${object[property]}`);
}

// for .. of loop
const array = ["a", "b", "c"];


for(let el of array) {
  console.log(el);
}

const iterable = new Map([['a', 1], ['b', 2], ['c',3]]);

for (let entry of iterable) {
  console.log(entry);
}

for(let [key, value] of iterable){
  console.log(key, value);
}

// JavaScript Callbacks
// Filter an Array for odd Numbers

let numbers = [1,2,3,4,5,6,7];
let result = [];

let isOdd = (number) => number % 2 != 0;
let isEven = (number) => number % 2 === 0;

let filter = (arr, fn)=> {
   arr.forEach((val) => {
    if(fn(val)) {
      result.push(val);
    }
  })
  return result;
}

console.log(filter(numbers, isOdd)); // is Odd is Callback function
result = [];
console.log(filter(numbers, isEven)); // is Even is Callback function


// Asynchronous JavaScript

// let download = (url) => setTimeout(() => console.log(`Downloading ${url}`), 1000);
// let process = (url) => console.log(`Processing ${url}`);

// download("https://www.javascripttutorial.net/pic.jpg");
// process("https://www.javascripttutorial.net/pic.jpg")

let download = (url, success, failure) => {           // Asynchronous Function
  setTimeout(() => {
    console.log(`Downloading ${url}`);
    typeof url === "string" ? success(url) : failure(url);
  }, 1000)
};

// let process = (url) => console.log(`Processing ${url}`); // Callback function

// let url = "https://www.javascripttutorial.net/pic.jpg" 
// download(url, process); // Asynchtornous callback

let url = "https://www.javascripttutorial.net/pic.jpg";
download(url, (url) => console.log(`Processing ${url}`),  (url) => console.log(`${url} is not a valid URL`)); // Asynchronous callback





// // Global Scope
// const firstName = "David"

// let outterFunc = () => {
//     console.log(firstName);
//     let innerFunc = () => {
//         console.log(firstName);
//     }
//     innerFunc();
// }

// outterFunc();

// var fullName = "David Singer";

// let func = () => {
//     const lastName = "Singer"
//     console.log(lastName);
// }

// func();


// // let block = () => {
// //     if(true){;
// //         const a = 5;
// //         let b = 10;
// //     }
// //     console.log(c);
// // }

// // block();























// console.log(a);
// var a = 5;
// console.log(a);

// let hoisting = () => {
//     console.log(b);
//     var b = 2;
//     console.log(b);
// }
// hoisting();

// hoistedFunc();
// function hoistedFunc(){
//     console.log("London Calling");
// }

// console.log(testHoisted);
// var testHoisted = 13;


// let foo = (a) => {
//     let b = a;
//     console.log(a + b);
// }

// let c = foo(2)

// // LHS: 3
// // RHS: 4

// // Engine: Hey Scope, I have LHS declaration c, sound familiar?
// // Scope: Yes, it has just been compiled, value undefined
// // Engine, cool, I also have a RHS look up for foo
// // Scope: I've got you, foo is a function
// // Engine: Thanks, so within foo I've got an LHS for a
// // Scope: Yup, compiler declared it as a formal parameter to foo, here you go.
// // Engine: Good, now I've got a LHS for b
// // Scope: Yes, compiler's got it, value undefined
// // Engine: Cool, now I have a RHS reference to a, are we still talking about the same guy?
// // Scope: Yup, same a as before
// // Engine: Nice, now I've got an RHS look up for console
// // Scope: No problem, console is built-in, here you go
// // Engine: Perfect. Looking up log() - alright it's a built-in function
// // Engine: Hey Scope, I've got another RHS look-up for a +  b, are they  still the same as before
// // Scope: Yes, same, values haven't changed.
// // Engine: Cool. Adding value of a, which is 2, to the value of be, which is 2