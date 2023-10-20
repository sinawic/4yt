<?php
    error_reporting(E_ERROR | E_PARSE);

    $servername = "db";
    $username = "MYSQL_USER";
    $password = "MYSQL_PASSWORD";
    $dbname = "MYSQL_DATABASE";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
