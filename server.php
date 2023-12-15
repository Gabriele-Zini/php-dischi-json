<?php

$string = file_get_contents("dischi.json");


$list_disk = json_decode($string, true);

if(isset($_GET['index'])) {
    $selected_disk= $list_disk[$_GET['index']];
    $json=json_encode($selected_disk);
} else {
    $json = json_encode($list_disk);
}


header("Content-Type: application/json");
echo $json;
