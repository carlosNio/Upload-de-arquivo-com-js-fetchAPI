<?php

// Receive the file
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fname = 'ARQUIVO';
    $uploadsdir = 'uploads/';
    $file = $_FILES[$fname];

    // if the file is empty or has a error
    if (!$file || $file['error'] ?? null) {
        echo json_encode(['msg' => 'Error']);
        exit;
    } else {
        if (!move_uploaded_file($file['tmp_name'], $uploadsdir . $file['name'])) {
            echo json_encode(['msg' => 'Error in upload process']);
            exit;
        }
    }

    echo json_encode(['msg' => 'The file was been uploaded successfully']);
} else {
    require "form.html";
}
