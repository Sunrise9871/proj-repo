<?php
    define('USER', 'todolist');
    define('PASSWORD', 'todolist');
    define('HOST', '26.161.34.238');
    define('DATABASE', 'todolist');
    try {
        $connection = new PDO("mysql:host=".HOST.";dbname=".DATABASE, USER, PASSWORD);
    } catch (PDOException $e) {
        exit("Error: " . $e->getMessage());
    }
?>