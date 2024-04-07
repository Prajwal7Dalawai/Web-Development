<?php
$ser = "localhost";
$user = "root";
$password = "";
$db = "loginregister";
$conn = new mysqli($ser, $user, $password, $db);

if ($conn->connect_error) {
    die("Connection failure: " . $conn->connect_error);
} else {
   // echo "Connection established";
}
$name = $_POST["name1"];
$password = md5($_POST["passwd1"]);
$sql = "SELECT * FROM register WHERE names = ? AND passwords = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Failed to prepare statement: " . $conn->error);
}
$stmt->bind_param("ss", $name, $password);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo "<div class='container' style='background-color: rgb(21, 83, 93);width:100%;height:100%;color:white'> ";
        echo "<p>&nbspLogin Successful!<p>";
        echo "<p>&nbspHave A Nice Day :)<p><br>";
    echo "</div>";
} else {
    echo "<div class='container' style='background-color: rgb(21, 83, 93);width:100%;height:100%;color:white'> ";
        echo "<p>&nbspLogin Failed<p>";
        echo "<p>&nbspPlease Try Again :)<p><br>";
    echo "</div>";
}

$stmt->close();
$conn->close();
?>
