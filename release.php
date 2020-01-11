<?php
        include_once 'checker.php';
        
        if (checkUDID($_SERVER['HTTP_X_UNIQUE_ID']) == 'YES')
		header('Location: https://matruka.me/debians/');
?>
