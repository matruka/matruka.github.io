<?php
	function checkUDID($udid) 
	{
		$acceptedUDID = array('11111', '22222', '333333');
		
		if (in_array($udid, $acceptedUDID))
			return 'YES';
		else
			return 'NO';	
	}
?>