<?php

    $attraction[]="Abucay Church"; 
    $attraction[]="Camaya Coast";
    $attraction[]="Death March Marker";
    $attraction[]="Five Fingers";
    $attraction[]="Laki Beach";
    $attraction[]="Las Casas";
    $attraction[]="Mt. Natib";
    $attraction[]="Mt. Samat";
    $attraction[]="Mt. Tarak";
    $attraction[]="Balanga Wetland";
    $attraction[]="WWII Museum";
    $attraction[]="Playa La Caleta";

// get the suggest parameter from URL
$request = $_GET["suggest"];
$suggest = "";
// lookup all suggestions from array if $request is different from ""
if ($request !== "") {
$request = strtoupper($request);
$len = strlen($request);
foreach($attraction as $name) {
if (stristr($request, substr($name, 0, $len))) {
if ($suggest === "") {
$suggest = $name;
} else {
$suggest .= ", $name";
}
}
}
}
// Output "No suggestion" if no hint was found or output correct values
echo $suggest === "" ? "No suggestion" : $suggest;
?>