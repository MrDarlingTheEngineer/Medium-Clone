<?php
include_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $title = $data->title;
    $body = $data->body;
    $author_id = $data->author_id;

    $query = "INSERT INTO articles (title, body, author_id) VALUES (:title, :body, :author_id)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":title", $title);
    $stmt->bindParam(":body", $body);
    $stmt->bindParam(":author_id", $author_id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Article created successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to create article"]);
    }
}
?>
