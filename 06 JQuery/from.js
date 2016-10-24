$(document).ready(function(){
    $("#password,#firstname,#email,#passwordverification").mouseover(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "grey");
    });
    $("#password,#firstname,#email,#passwordverification").mouseout(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "white");
    });

    $(".buttons").click(function() {


        $("#firstname").ready(function () {
            if ($("#firstname").val().length < 2) {
                $("#firstname").addClass("error")
            }
            else $("#firstname").addClass("correct")
        });

        $("#email").ready(function () {
            if ($("#email").val().length < 10) {
                $("#email").addClass("error")
            }
            else $("#email").addClass("correct")
        });

        $("#password").ready(function () {
            if ($("#password").val().length < 10) {
                $("#password").addClass("error")
            }
            else $("#password").addClass("correct")
        });

        // $("#passwordverification").ready(function() {
        if ($.data("#password") == $.data("#passwordverification")) {
            $("#passwordverification").addClass("correct")
        }
        else $("#passwordverification").addClass("error")
        });






        // checkLength("firstname",2);
        //     checkLength("email",10);
        //
        //
        // function checkLength(firstname, minimumlength) {
        //     console.log("firstname; "+chicken)
        //     console.log("firstname length; "+chicken.length)
        //     console.log("minimumlength; "+minimumlength)
        //
        //     if (chicken.length > minimumlength) {
        //         $("#firstname").addClass(".correct");
        //
        //     }
        //     else $("#firstname").addClass(".error");
        // }



});