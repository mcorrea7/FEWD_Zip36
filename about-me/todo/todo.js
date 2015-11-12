//Structure
var form   = document.querySelector("form");
var task   = document.querySelector(".task");
var date   = document.querySelector(".date");
var button = document.querySelector("button");
var list   = document.querySelector(".list");

console.log(task);
console.log(date);



//Events
form.addEventListener("submit", todo);

//Event Handlers
function todo(a) {
	a.preventDefault();										// prevents default form behaviours

	// Define values of task & date inputs
	var taskValue = task.value;
	var dateValue = date.value;

	// Create Elements
	var checkbox = document.createElement("input");			// creates a checkbox
	var newTask = document.createElement("LI");				// creates the new task with check box and text
	var textArea = document.createElement("span");			// creates a span for the task and date

	// Decorate Elements
	checkbox.setAttribute("type", "checkbox");				// define the type of box
	textArea.textContent = taskValue + " " + dateValue;		// defines the text in the new element

	// Append Elements
	list.appendChild(newTask);								// adds newTask to the ul
	newTask.appendChild(checkbox);							// adds the checkbox to newTask
	newTask.appendChild(textArea);							// adds all text to newTask

}
