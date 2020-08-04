$(document).ready(function () {

    $("#exerciseType").on("change", function () {
        const exercise = $("#exerciseType").val();
        console.log(exercise)
        if (exercise === "Cardio") {
            $(".strength").addClass("hide")
            $(".cardio").removeClass("hide")
        } else {
            $(".cardio").addClass("hide")
            $(".strength").removeClass("hide")
        }
    });

    $("#submit").click(function(event){
        event.preventDefault
        const exerciseType = $("#exerciseType").val();
        if (exerciseType === "Cardio") {
            location.href = "/submitcardio"
        } else {
            location.href = "/submitstrength"
        }
    })
})