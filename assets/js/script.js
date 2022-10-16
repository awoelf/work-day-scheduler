let scheduleContainer = $("#schedule-container");
let timeDisplay = $("#currentDay");
let lastHour = 17;

function displayTime() {
  let currentTime = moment().format("dddd, MMMM Do");
  timeDisplay.text(currentTime);
}

function createHours() {
  for (let i = 9; i < lastHour + 1; i++) {
    scheduleContainer.append(
      $("<div>")
        .addClass("row my-1")
        .attr("id", `row-${i}`)
        .append(
          $("<div>")
            .addClass(
              "col-1 d-flex justify-content-center rounded-left hour-col"
            )
            .append($("<p>").addClass("my-auto").attr("id", "time"))
        )
        .append(
          $("<div>")
            .addClass("col-10 activity d-flex justify-content-start text-col")
            .append(
              $("<textarea>")
                .attr("id", `activity-${i}`)
                .attr("rows", "2")
                .attr("placeholder", "Add your work activity...")
                .addClass("my-auto w-100")
            )
        )
        .append(
          $("<div>")
            .addClass(
              "col-1 d-flex justify-content-center btn btn-primary rounded-right save-btn"
            )
            .attr("id", `${i}`)
            .append(
              $("<span>")
                .addClass("material-symbols-outlined my-auto")
                .text("save")
            )
        )
    );
    $(`#row-${i}`).find("#time").text(moment().hour(i).format("h A"));
    textareaBg(i);
    console.log(i);
  }
}

// Allows user to save activity to respective hour to local storage
function saveActivity(hourId) {
  localStorage.setItem(`row-${hourId}`, JSON.stringify($(`#activity-${hourId}`).val()));
}

function loadActivity() {
  for (let i = 9; i < lastHour + 1; i++) {
    if (localStorage.getItem(`row-${i}`)) {
      $(`#activity-${i}`).val(localStorage.getItem(`row-${i}`).replace(/['"]+/g, ''));
    }
  }
}

// Changes the background color of the hour's textarea to reflect the past, present, and future status.
function textareaBg(hourId) {
  if (hourId == moment().hour()) {
    $(`#row-${hourId}`)
      .children(".text-col")
      .attr("style", "background-color: #d7c7b6");
  } else if (hourId < moment().hour()) {
    $(`#row-${hourId}`)
      .children(".text-col")
      .attr("style", "background-color: #9bc3c0");
  } else {
    $(`#row-${hourId}`)
      .children(".text-col")
      .attr("style", "background-color: #dad7b2");
  }
}



displayTime();

createHours();

loadActivity();

$(document).on("click", ".btn", function (event) {
  event.preventDefault();
  saveActivity(this.id);
});
