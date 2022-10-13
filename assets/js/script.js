let scheduleContainer = $("#schedule-container");
let timeDisplay = $("#currentDay");
let lastHour = 17;

function displayTime() {
  let currentTime = moment().format("dddd, MMMM Do");
  timeDisplay.text(currentTime);
}

function createHours() {
  for (let i = 9; i < lastHour + 1; i++) {
    scheduleContainer.addClass("").append(
      $("<div>")
        .addClass("row my-1")
        .attr("id", `hour${i}`)
        .append(
          $("<div>")
            .addClass("col-1 d-flex justify-content-center rounded-left hour-col")
            .append($("<p>").addClass("my-auto").attr("id", "time"))
        )
        .append(
          $("<div>")
            .addClass(
              "col-10 activity d-flex justify-content-start text-col"
            )
            .append(
              $("<textarea>")
                .attr("id", "activity")
                .attr("rows", "2")
                .attr("placeholder", "Add your work activity...")
                .addClass("my-auto w-100")
            )
        )
        .append(
          $("<div>")
            .addClass("col-1 d-flex justify-content-center btn btn-primary rounded-right save-btn")
            .attr("id", "btn")
            .append(
              $("<span>")
                .addClass("material-symbols-outlined my-auto")
                .text("save")
            )
        )
    );
    $(`#hour${i}`).find("#time").text(moment().hour(i).format("h A"));
  }
}

// Allows user to save activity to respective hour to local storage
function saveActivity() {

}

// Changes the background color of the hour's textarea to reflect the past, present, and future status.
function currentHour() {

}

displayTime();

createHours();
