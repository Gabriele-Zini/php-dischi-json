<?php

$string = file_get_contents("dischi.json");


$list_disk = json_decode($string, true);

$json = json_encode($list_disk);

header("Content-Type: application/json");
echo $json;

