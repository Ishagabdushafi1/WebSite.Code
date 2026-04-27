<?php
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM course_list";
$result = $conn->query($sql);

$courses = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }
}
header('Content-Type: application/json');
echo json_encode($courses);

$conn->close();
?>