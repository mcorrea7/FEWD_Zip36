//Structure
var form   = document.querySelector("form");
var task   = document.querySelector(".task");
var date   = document.querySelector(".date");
var button = document.querySelector("button");
var list   = document.querySelector("ul");
var check  = document.querySelector(".check");

console.log(task);
console.log(date);

//Setup
var tasks = [];

//Events
form.addEventListener("submit", addTask);
button.addEventListener("click", showTask);
// check.addEventListener("click", completedTask);

//Event Handlers
function showTask(e) {
	console.log("showTask");
	tasks.forEach(todo);
}

function addTask(e) {
	e.preventDefault();
	tasks.push(task.value);

	form.reset();
}

function todo() {
	var taskValue = task.value;
	var dateValue = date.value;

	var newTask = document.createElement("LI");
	newTask.textContent = task.value + "(" + date.value + ")";
	list.appendChild(newTask);


}

// function completedTask(e) {
// 	var check = event.target;

// 	if (check = true) {

// 	}


// }