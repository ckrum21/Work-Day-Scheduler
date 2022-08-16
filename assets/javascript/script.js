// handle displaying the time
var timeDisplayEl = moment();
$("#currentDay").text(timeDisplayEl.format("MMMM Do, YYYY"));

var task = document.querySelector(".task");
var button = document.querySelector(".button");

function renderLastRegistered() {
    var task = localStorage.getItem("task");
      
    task.textContent = task;
  }
  

button.addEventListener("click", function(event) {
    event.preventDefault();
  
    var task = document.querySelector(".task").value;

      localStorage.setItem("task", task);
      renderLastRegistered();
    }
  );
  