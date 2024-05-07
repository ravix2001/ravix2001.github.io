<?php
    //taking input in database
    $fname = $_POST['fname'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    //database connection
    $conn = new mysqli('localhost','root','','feedbackform');
    if($conn -> connect_error){
        die('Connection failed : '.$conn -> connect_error);
    }
    else{
        $stmt = $conn -> prepare("INSERT INTO data (fname,email,feedback) values(?,?,?)");
        $stmt -> bind_param("sss",$fname,$email,$feedback);
        $stmt -> execute();
        echo "Submitted successfully";
        $stmt -> close();
        $conn -> close();
    }
?>
