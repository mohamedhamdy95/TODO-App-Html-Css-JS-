/**
 * tasks
 * 1- use sweet alert if input empty
 * 2- check if task is exsist
 * 3- creat delete all tasks
 * 3- creat finish all tasks
 * 5- add tasks to local storage
 */

// all variables
let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".plus");
let todoContainer = document.querySelector(".task-content");
let taskCount = document.querySelector(".task-count span");
let completedTask = document.querySelector(".task-completed span");

// focus on input faild
window.onload = function () {
  theInput.focus();
};

// Adding Task
addButton.onclick = function () {
  // if Empty
  if (theInput.value == "") {
    console.log("empty");
  } else {
    let noTaskMsg = document.querySelector(".no-task");

    // check if no task msg span  is exist
    if (document.body.contains(document.querySelector(".no-task"))) {
      //    remove no task msg
      noTaskMsg.remove();
    }

    //creat span element
    let mainSpan = document.createElement("span");

    //creat delete button
    let deleteButton = document.createElement("span");

    // creat  mainSpan text
    let taskText = document.createTextNode(theInput.value);

    // creat delete button text
    let deleteText = document.createTextNode("Delete");

    // add text to main span
    mainSpan.appendChild(taskText);
    // add class to main span
    mainSpan.className = "task-box";

    // add text to delete button
    deleteButton.appendChild(deleteText);
    // add class to delete button
    deleteButton.className = "delete";

    // add  delete button to main span
    mainSpan.appendChild(deleteButton);

    // add maon span to container
    todoContainer.appendChild(mainSpan);
    // empty the onput
    theInput.value = "";
    theInput.focus();

    // calculate tasks
    clculateTasks();
  }
};

document.addEventListener("click", function (e) {
  // delete task
  if (e.target.className == "delete") {
    // delete curent task
    e.target.parentNode.remove();

    // check number of tasks in the containrt
    if (todoContainer.childElementCount == 0) {
      creatNoTasks();
      theInput.focus();
    }
  }

  // finish task
  if (e.target.classList.contains("task-box")) {
    // add finished class
    e.target.classList.toggle("finished");
  }

  // calculate tasks
  clculateTasks();
});

// creat no tasks msg span
function creatNoTasks() {
  // creat no tasks msg span element
  let msgSpan = document.createElement("span");

  // creat no tasks msg text
  let msgText = document.createTextNode("No Tasks Here");

  // add text to msg span
  msgSpan.appendChild(msgText);
  //   add class to msg span
  msgSpan.className = "no-task";

  //   add no tasks msg span element to task container
  todoContainer.appendChild(msgSpan);
}

// calculat tasks
function clculateTasks() {
  // calculat all tasks
  taskCount.innerHTML = document.querySelectorAll(
    ".task-content .task-box"
  ).length;

  // calculat completed tasks
  completedTask.innerHTML = document.querySelectorAll(
    ".task-content .finished"
  ).length;
}
