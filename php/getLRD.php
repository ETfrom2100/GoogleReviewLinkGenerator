<?
	if(isset($_GET['place_cid']))
	{
		$contents = file_get_contents("https://maps.google.com/?cid=".$_GET['place_cid']);
		
		
		preg_match("/(0x[a-z0-9]{4,}:0x[a-z0-9]{4,})/",$contents,$matches);
		
		echo $matches[0];
		
	}


?>