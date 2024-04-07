<?php
include "connection.php";
if (isset($_POST["name"]) && isset($_POST["passwd"])) {
    $name = $_POST["name"];
    $password = md5($_POST["passwd"]); 
    $stmt = $conn->prepare("INSERT INTO register (names, passwords) VALUES (?, ?)");

    if (!$stmt) {
        echo "Failed to prepare statement: " . $conn->error;
    } 
    else {
        $stmt->bind_param("ss", $name, $password);
        $result = $stmt->execute();

        if (!$result) {
            echo "Failed to execute query: " . $stmt->error;
        } else {
            echo "<div class='container' style='background-color: rgb(21, 83, 93);width:100%;height:100%;color:white;'> ";
            echo "<p style='color:white';>&nbspRegistration successful!<p>";
            echo "<a href=\"login.html\" style='color:white;'>&nbspClick here to login</a>";
            echo "</div>";
        }
        $stmt->close();
    }
} else {
    echo "<div class='container'>";
    echo "Name and password not provided.";
    echo "</div>";
}
$conn->close();
?>
