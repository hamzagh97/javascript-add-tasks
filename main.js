let addTaskInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task button");
let errorDiv = document.querySelector(".error-div");
let taskContainer = document.querySelector(".task-container");
let arrayOfTasks = [];

if (window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}

if (window.localStorage.getItem("tasks")) {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"))
    addTaskToPage(tasks)
}

addButton.addEventListener("click", function() {
    let inputValue = addTaskInput.value;
    if (inputValue !== "" && inputValue !== null) {
        addTaskToArray(inputValue);
        addTasksToLocalStorage(arrayOfTasks);
        addTaskToPage(arrayOfTasks);
        addTaskInput.value = "";
    } else {
        errorDiv.textContent = "write something"
    }
});

function addTaskToArray(inputValue) {
    const task = {
        id: Date.now(),
        title: inputValue,
        completed: false,
    };
    arrayOfTasks.push(task);
}

function addTasksToLocalStorage(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function addTaskToPage(arrayOfTasks) {
    taskContainer.innerHTML = "";
    errorDiv.textContent ="";

    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.setAttribute("class", "task");
        div.setAttribute("id", task.id);
        div.textContent = task.title;
        let taskButtonText = document.createTextNode("delete");
        let taskButton = document.createElement("button");
        taskButton.className = "del";
        taskButton.append(taskButtonText);
        div.appendChild(taskButton);
        taskContainer.appendChild(div);
    });
}

taskContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("del")) {
        removeTaskFromLocalStorage(e.target.parentElement.getAttribute("id"));
        e.target.parentElement.remove();
    }

})

function removeTaskFromLocalStorage(taskID) {
    arrayOfTasks = arrayOfTasks.filter(function(task) {
        return task.id != taskID;
    })
    addTasksToLocalStorage(arrayOfTasks);
}


let fontChanger = document.querySelector("#font-family");
let colorChanger = document.querySelector("#font-color");
let sizeChnager = document.querySelector("#font-size");
let test = document.querySelector(".test");

if (window.localStorage.getItem("localfontfamily")) {
	document.querySelector(`[value='${localStorage.localfontfamily}']`).selected =
		true;
	test.style.fontFamily = localStorage.localfontfamily;
}

if (window.localStorage.getItem("localfontcolor")) {
	document.querySelector(`[value='${localStorage.localfontcolor}']`).selected =
		true;
	test.style.color = localStorage.localfontcolor;
}

if (window.localStorage.getItem("localfontsize")) {
	document.querySelector(`[value='${localStorage.localfontsize}']`).selected =
		true;
	test.style.fontSize = localStorage.localfontsize;
}



if (window.localStorage.getItem("fontfamily")) {
    test.style.fontFamily = `${localStorage.localfontfamily}`;
}

if (window.localStorage.getItem("fontcolor")) {
    test.style.color = `${localStorage.localfontcolor}`;
}

if (window.localStorage.getItem("fontsize")) {
    test.style.fontSize = `${localStorage.localfontsize}`;
}



fontChanger.onchange = function() {
    test.style.fontFamily = `${this.value}`;
    window.localStorage.setItem("localfontfamily", this.value)
}

colorChanger.onchange = function() {
    test.style.color = `${this.value}`;
    window.localStorage.setItem("localfontcolor", this.value)
}

sizeChnager.onchange = function() {
    test.style.fontSize = `${this.value}`;
    window.localStorage.setItem("localfontsize", this.value)
}


// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   // Write Your Destructuring Assignment Here
//   let {age: a,working: w, country: c, hobbies: [h1, ,h3]} = member;
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming



//   const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
//   // Write Your Destructuring Assignment/s Here
//     let {
//         title: t, 
//         developer: d,
//         releases: { Origin: or}
//     } = game;
//     let [o, a] = Object.keys(game.releases);
//     let [u, j] = game.releases["Oath In Felghana"];
//     let { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];

//     console.log(Object.keys(game));
    
    
//     console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//     console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games
  
//     console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//     console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
//     console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   console.log(`${a} Price in USA Is ${j_price}`);
//   // Ark Of Napishtim Price in USA Is 10 USD
  
//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD


//   let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // Write Your Code Here
// function info(myFriends) {
// 	if ((chosen <= myFriends.length && chosen > 0)) {
//         let {
//             title,
//             age,
//             available,
//             skills: [, s2]
//         } = myFriends[chosen - 1];
//         console.log(title);
//         console.log(age);
//         console.log(available ? "Available" : "Not Available");
//         console.log(s2);
//     } else {
//         return;
//     }
	
// }

// info(myFriends);


// // If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
 (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed'];

 console.log([...new Set(myFriends)].sort());



// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };
  
//   // Needed Output
// //   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// //   3
// //   true


//   let newMyInfo = new Map(Object.entries(myInfo));
//   console.log(newMyInfo);
//   console.log(newMyInfo.size);
//   console.log(newMyInfo.has("role"));


   let theNumber = 100020003000;

// // Needed Output
// 123
 console.log(+[...new Set(theNumber.toString())].sort().join(""))


 let theName = "Elzero";

// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// console.log(theName.split(""))
// console.log([...theName])
let Name = Array.from(theName);
let newName = [...Array(Name.length).keys()];
console.log(newName)
// console.log([...new Set(theName)])
// console.log(Object.values(theName))

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6, "N"];

// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// Shift numbers to the top of the array
for (let i = 0; i < chars.length; i++) {
	if (typeof chars[i] === "number") chars.unshift(...chars.splice(i, 1));
}

// Find the index of first letter in the array
let firstLetterPosition = chars.findIndex((e) => typeof e === "string");
console.log(firstLetterPosition)
// Make needed changes
chars.copyWithin(0, firstLetterPosition, firstLetterPosition * 2);
console.log(chars);


let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(Array.from([numsOne, numsTwo]).flat());


let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Solution in various methods

console.log([...n1, ...n2].length * Math.max(...n2)); // 210
console.log(parseInt(`${n2.indexOf(Math.min(...n1))}${Math.min(...n1)}`));// 210
