<?php
	include_once 'Checker.php';

	if (checkUDID($_SERVER['HTTP_X_UNIQUE_ID']) == 'YES')
		header('Location: https://matruka.me/Packages.bz2');
?>
