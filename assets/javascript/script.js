

var timeDisplayEl = moment();
$("#currentDay").text(timeDisplayEl.format("MMMM Do, YYYY"));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
  
      var text = $(this).siblings(".task").val();
      var time = $(this).parent().attr("id");


      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
    
      var timeNow = moment().hour();
    
      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id"));

      
          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

  $("#hour9 .task").val(localStorage.getItem("hour9"));
  $("#hour10 .task").val(localStorage.getItem("hour10"));
  $("#hour11 .task").val(localStorage.getItem("hour11"));
  $("#hour12 .task").val(localStorage.getItem("hour12"));
  $("#hour1 .task").val(localStorage.getItem("hour1"));
  $("#hour2 .task").val(localStorage.getItem("hour2"));
  $("#hour3 .task").val(localStorage.getItem("hour3"));
  $("#hour4 .task").val(localStorage.getItem("hour4"));
  $("#hour5 .task").val(localStorage.getItem("hour5"));

 timeTracker();
}) 
