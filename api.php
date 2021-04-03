<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $cityname = $_POST['cityname'];
        $url = 'api.openweathermap.org/data/2.5/weather';
        $key = '952830d11442440c32e03688587eadfe';
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url.'?q='.$cityname.'&appid='.$key);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        $result = curl_exec($ch);
        print_r($result);
        curl_close($ch);
    }
?>