function validate_form_data() {
    console.log("The user has submitted the form.");



    var fullname = $('#fullname').val().length ;
 //  document.getElementById('fullname');
   // console.log(fullname.value);

    console.log("fullname: "+fullname);

    var email = $("#enteremail").val().length;

    var password = $("#password").val().length;


    // object.property
    // object.method()



    console.log('email: ' + email);


        if (fullname < 2)  {
            console.log("i got here");
           $("#fullname").focus();
            $("#errorBox").html ("name must be longer than 2 characters");

            return;
        }

        if (email < 5) {
            $("#email").focus();
            $("#errorBox").html ("email must be longer than 5 characters");

            return;
        }

        if (password < 10) {
           $("#password").focus();
           $("#errorBox").html ("password must be longer than 10 characters");
            return;
        }

        else $("#errorBox").html (" ");

    if (fullname != '' && email != '' && password != '') {
            $("#message").html ("Start Making!");
        }}






        function validate_form_data() {
            console.log("The user has submitted the form.");



            var fullname = $('#fullname').val().length ;
         //  document.getElementById('fullname');
           // console.log(fullname.value);

            console.log("fullname: "+fullname);

            var email = $("#enteremail").val().length;

            var password = $("#password").val().length;






            // object.property
            // object.method()




                if (fullname < 2)  {
                    console.log("i got here");
                   $("#fullname").focus();
                    $("#errorBox").html ("name must be longer than 2 characters");

                    return;
                }



                if (password < 10) {
                   $("#password").focus();
                   $("#errorBox").html ("password must be longer than 10 characters");
                    return;
                }

                else $("#errorBox").html (" ");

            if (fullname != '' && email != '' && password != '') {
                    $("#message").html ("Start Making!");
                }}
