$(function () {
   $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).closest(".time-block").attr("id");

    var description = $(this).siblings(".description").val();
   
    localStorage.setItem(timeBlockId, description);
  });

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    var currentHour = dayjs().hour();

    if (timeBlockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var description = localStorage.getItem(timeBlockId);

    $(this).find(".description").val(description);
  });

  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text("Today is " + currentDate);
});

