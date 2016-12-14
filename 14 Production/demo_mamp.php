<?php


if ( $_FILES ) {

//    echo 'A file was submitted.' ;

//    print_r ( $_FILES['file_to_upload'] ) ;

    if ( $_FILES['file_to_upload']['size'] != 0 ) {

        $upload_file = 'uploads/' . $_FILES['file_to_upload']['name'] ;

        if ( move_uploaded_file ( $_FILES['file_to_upload']['tmp_name'], $upload_file ) ) {
            echo '<strong>' .$_FILES['file_to_upload']['name'] . '</strong> was uploaded successfully.' ;
            exit ;
        }
        else {
            echo "I'm sorry, your file could not be uploaded." ;
        }


    }

}



?>
