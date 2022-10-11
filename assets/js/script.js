let scheduleContainer = $("#schedule-container");
let timeDisplay = $("#currentDay");

function displayTime() {
  let currentTime = moment().format("dddd, MMMM Do");
  timeDisplay.text(currentTime);
}

let hourRow = $("<div>")
  .addClass("row")
  .attr("id", "9-am")
  .append(
    $("<div>").addClass("col-1 bg-primary").append($("<p>").attr("id", "hour"))
  )
  .append(
    $("<div>").addClass("col-10 bg-secondary activity").attr("id", "activity")
  )
  .append($("<div>").addClass("col-1 bg-success").attr("id", "btn"));


displayTime();
scheduleContainer.append(hourRow);
$("#hour").text("help???");