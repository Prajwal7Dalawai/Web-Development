<?php
$ser = "localhost";
$user = "root";
$password = "";
$db = "loginregister";
$conn = new mysqli($ser, $user, $password, $db);
if (!$conn) {
    echo "connection failure";
} else {
    //echo "connection established";
}
?>