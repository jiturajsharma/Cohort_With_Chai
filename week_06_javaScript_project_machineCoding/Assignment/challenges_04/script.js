const taskForm = document.getElementById("task-form");
const numberOfTasksDisplayed = document.getElementById(
  "numberOfTasksDisplayed"
);
const nextPageBtn = document.getElementById("next");
const prevPageBtn = document.getElementById("prev");
const pageNumberDisplay = document.getElementById("page");
const displayCompletedTaskCnt = document.getElementById(
  "no-of-tasks-completed"
);
const categoryFilter = document.getElementById("filter");

let deleteTasksBtn = document.querySelectorAll(".delete-btn");
let currCategory = "";
let categoryWiseTasks = [];
let allTasks = [];
let tasks = [];
let totalNumberOfTasks = 0;
let pageNumber = 0;
let limit = 3;
let completedTaskCnt = 0;

let tasksShown = limit;

pageNumberDisplay.innerText = parseInt(pageNumber) + 1;

prevPageBtn.style.background = "gray";

// adding task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(taskForm[1].value);
  if (!taskForm[0].value || !taskForm[1].value) {
    alert("Fill task as well as select category!");
    return;
  }
  let task = taskForm[0].value;
  let taskCategory = taskForm[1].value;

  const currTime = new Date().getTime();

  allTasks.push({
    taskTitle: task,
    taskCategory: taskCategory,
    isCompleted: false,
    id: currTime,
  });

  taskForm[0].value = "";
  // taskForm[1].value = "";
  allTasks = allTasks.sort((t1, t2) => t2.id - t1.id);
  allTasks = allTasks.sort((t1, t2) => t1.isCompleted - t2.isCompleted);

  // allTasks.sort((t1, t2) => t);
  localStorage.setItem("tasks", JSON.stringify(allTasks));

  alert("Task Added!");
  loadTasks();
});

// loading tasks from localstorage
const loadTasks = () => {
  let tempTasks = localStorage.getItem("tasks");
  allTasks = JSON.parse(tempTasks) || [];

  if (currCategory !== "") {
    categoryWiseTasks = allTasks.filter((task) => {
      return task.taskCategory == currCategory;
    });
  } else {
    categoryWiseTasks = allTasks;
  }

  tasks = categoryWiseTasks;
  totalNumberOfTasks = tasks.length;
  if (pageNumber === 0) {
    tasksShown = totalNumberOfTasks > limit ? limit : totalNumberOfTasks;
  }
  completedTaskCnt = 0;
  categoryWiseTasks.forEach((task) => {
    if (task.isCompleted) {
      completedTaskCnt++;
    }
  });

  displayCompletedTaskCnt.innerText = `${completedTaskCnt}`;
  numberOfTasksDisplayed.innerText = `${tasksShown}/${totalNumberOfTasks}`;
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // tasks.splice(0, pageNumber * limit);
  // tasks.splice(limit, );

  const startIndex = pageNumber * limit;
  const endIndex = startIndex + limit;

  for (let i = startIndex; i < endIndex && i < totalNumberOfTasks; i++) {
    const task = tasks[i];
    let newListItem = document.createElement("li");

    if (task.isCompleted) {
      newListItem.innerHTML = `<input type="checkbox" class="mark-completed" checked/>
                              <span class="li-right">
                                <span>
                                  <p><strike>${task.taskTitle}</strike></p>
                                  <small>${task.taskCategory}</small>
                                </span>
                                <button class="delete-btn">X</button></span
                              >`;

      newListItem.style.background = "#c3ffc3";
    } else {
      newListItem.innerHTML = `<input type="checkbox"  class="mark-completed" />
                              <span class="li-right">
                                <span>
                                  <p>${task.taskTitle}</p>
                                  <small>${task.taskCategory}</small>
                                </span>
                                <button class="delete-btn">X</button></span
                              >`;
    }

    taskList.appendChild(newListItem);
  }

  //deleting the task
  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let tempTasks = allTasks.filter((task) => {
        return task.taskTitle !== tasks[index].taskTitle;
      });
      localStorage.setItem("tasks", JSON.stringify(tempTasks));
      loadTasks();
    });
  });

  // marking a task completed
  document.querySelectorAll(".mark-completed").forEach((checkbox, index) => {
    // console.log(checkbox);
    checkbox.addEventListener("change", () => {
      // console.log(index);

      let tempTask = allTasks.find((task) => task.id === tasks[index].id);

      tempTask.isCompleted = !tempTask.isCompleted;

      // Sorting Tasks
      allTasks = allTasks.sort((t1, t2) => t2.id - t1.id);
      allTasks = allTasks.sort((t1, t2) => t1.isCompleted - t2.isCompleted);
      localStorage.setItem("tasks", JSON.stringify(allTasks));

      loadTasks();
    });
  });
};

// pagination handling
nextPageBtn.addEventListener("click", () => {
  // console.log("Next Page");
  if (tasksShown < totalNumberOfTasks) {
    pageNumber++;
    tasksShown +=
      totalNumberOfTasks - limit * pageNumber > limit
        ? limit
        : totalNumberOfTasks - limit * pageNumber;

    if (tasksShown === totalNumberOfTasks)
      nextPageBtn.style.background = "gray";
    prevPageBtn.style.background = "blue";
  } else {
    nextPageBtn.style.background = "gray";
    return;
  }
  pageNumberDisplay.innerText = parseInt(pageNumber) + 1;
  loadTasks();
});

prevPageBtn.addEventListener("click", () => {
  // console.log("Prev Page");
  if (pageNumber > 0) {
    pageNumber--;
    tasksShown = limit * (pageNumber + 1);
    nextPageBtn.style.background = "blue";
    if (pageNumber == 0) prevPageBtn.style.background = "gray";
  } else {
    return;
  }
  pageNumberDisplay.innerText = parseInt(pageNumber) + 1;
  loadTasks();
});

// filter
categoryFilter.addEventListener("change", () => {
  currCategory = categoryFilter.value;
  loadTasks();
});

loadTasks();
