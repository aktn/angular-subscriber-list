<?php

    header("Access-Control-Allow-origin: *");
    header("Content-Type: application/json");
    header("Cache-Control: no-cache");

    //$jsonString['subscribers']=1;
    //$jsonString = json_decode(key($_POST));
    $jsonString = '[{
        "id": 1,
        "name": "John",
        "email": "joe@yahoo.com"
        },{
        "name": "Michael",
        "email": "michael@hotmail.com",
        "id": 3
    }]';
 
    $jsonDecoded = json_decode($jsonString, true);
    $csvName = 'subscriber-list.csv';
    $sList = fopen($csvName, 'w');

    foreach($jsonDecoded as $row){
        fputcsv($sList, $row);
    }

    fclose($sList);
    readfile($sList); 
?>