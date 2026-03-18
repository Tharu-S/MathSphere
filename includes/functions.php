<?php
// Clean and sanitize user input
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Check if email is valid
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['ms_logged_in']) && $_SESSION['ms_logged_in'] === true;
}
?>
