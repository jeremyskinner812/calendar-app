// waiting for page load to run function
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var toDo = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
// saving input and time to local storage
    localStorage.setItem(time, toDo);
    alert("Item saved to local storage");
  });
  // feedback to let user know saved


  // function to update color for each time block based on current time
  function updateClass() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function () {
      var lineHour = parseInt($(this).attr("id").split("-"));

      if (lineHour < currentTime) {
        $(this).addClass("past");
      } else if (lineHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // calling function to run
  updateClass();

  // update all classes every 60 seconds
  setInterval(updateClass,60000);
  // setting values for timeblocks from values in local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-13"));
  $("#hour-2 .description").val(localStorage.getItem("hour-14"));
  $("#hour-3 .description").val(localStorage.getItem("hour-15"));
  $("#hour-4 .description").val(localStorage.getItem("hour-16"));
  $("#hour-5 .description").val(localStorage.getItem("hour-17"));

  // display current date and time in header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
