// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        //retrieve values from "information"
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save value in local storate
        localStorage.setItem(time, text);
    })

    function track() {
        //get current time.
        var currentTime = moment();
        // loop over timeblocks
        $(".timeBlocks").each(function () {
            var block = parseInt($(this).attr("id").split(".hour")[1]);
            
            if (block < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (block === currentTime) {
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

    //retrieve items from local storage
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    track();
    
})