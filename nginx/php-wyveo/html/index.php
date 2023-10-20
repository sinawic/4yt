<?php
	header('Content-Type: application/json');
	
	session_start();
	include "conn.php";
	
	$apiResult['code'] = 500;
	$apiResult['data'] = "empty request";
	$apiResult['success'] = false;
	
	function apiResponse($code, $data, $success = false){
		$apiResult['code'] = $code;
		$apiResult['data'] = $data;
		$apiResult['success'] = $success;
		echo json_encode($apiResult);
	}

	$sql = "SELECT * FROM tbl WHERE id='1'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		$row = $result->fetch_assoc();
		$sql = "UPDATE tbl SET name='new name' WHERE id='1'";
		if($conn->query($sql) === TRUE)
			return apiResponse(200, $row, true);
		else
			return apiResponse(500, ['msg' => $conn->error]);
		
	} else
		return apiResponse(404, ['msg' => 'no rows found']);

	$conn->close();
