<?php
require_once 'includes/db.php';
require_once 'includes/functions.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = sanitize($_POST['name']    ?? '');
    $email   = sanitize($_POST['email']   ?? '');
    $message = sanitize($_POST['message'] ?? '');

    if (!$name || !$email || !$message) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $message]);

    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
}
?>
