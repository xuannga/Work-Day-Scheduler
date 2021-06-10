// Display today's day and date
var todayDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function() {
    // saveBtn click listener 
    $(".saveBtn").on("click", function() {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function track() {
        //get current am/pm.
        var currentTime = moment().format('H');
        console.log(currentTime);
        // loop over timeblocks
        $(".timeBlocks").each(function() {

            var block = parseInt($(this).attr("id").split(("hour")[0]));
            console.log(block);

            if (block < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (block == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    //retrieve items from local storage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    track();

})