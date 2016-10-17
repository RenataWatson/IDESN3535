function validateForm()
{
    var firstname=document.getElementById("firstname");

    checklength(firstname,2);

    var email=document.getElementById("email");

    checklength(email,5);

    var password=document.getElementById("password");

    checklength(password,10);

    var re_enter_password=document.getElementById("re_enter_password");
    checklength(re_enter_password,password);
//     if (textbox.value.length >= 2)
//     {
//         document.getElementById("firstnamebox").innerText="Correct!";
//     }
//     else
//     {
//         document.getElementById("name").innerHTML="Oops!";
// //     }
}
function checklength(wordtocheck, minimumlength) {

    if (wordtocheck.value.length>minimumlength){
        // THe first name is more than 2 characters
        console.log( wordtocheck.value+" is more than "+minimumlength+" characters");
        wordtocheck.className = "correct";


    // check to see if object has assaighn to it, if it does remove it



    }
    else{
        // the first name is less than 2 charactrs
        console.log( wordtocheck.value+" is less than "+minimumlength+" characters");

        wordtocheck.className = "error";
    }
}

function myFunction() {
    var x = document.getElementById("myRadio");
    x.checked = true;
}



//
//
// window.changeColour = function(value)
// {
//     alert(value);
//     var color = document.body.style.backgroundColor;
//     switch(value)
//     {
//         case 'b':
//             color = "#FF0000";
//             break;
//         case 'r':
//             color = "#0000FF";
//             break;
//         case 'p':
//             color = "#FF00FF";
//             break;
//     }
//     document.body.style.backgroundColor = color;
// }
