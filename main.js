$(document).ready(function(){
    $('#city').on('keyup',function(){
        $('#error').empty()
        var cityname = $(this).val()

        if(cityname.trim() == '' || cityname.length == 0){
            $('title').text('World\'s Current Weather')
            $('#city').css('border','1px solid red')
            $('#error').html('city name required')
            $('#result').html('<div class="row"><div class="col-md-12"><img src="images/search.jpg" width="100%" height="400px"></div></div>')
        }else{
            $.ajax({
                url: 'api.php',
                type: 'POST',
                datatype: 'json',
                data: {'cityname':cityname},
                success: function(response){
                    arr = JSON.parse(response)
                   if(arr.cod == '404'){
                        $('#error').empty()
                        $('#result').empty()
                        $('title').text('World\'s Current Weather')
                        $('#city').css('border','1px solid red')
                        $('#error').html(arr.message)
                        $('#result').html('<div class="row"><div class="col-md-12"><img src="images/404.png" width="100%" height="400px"></div></div>')
                   }else{
                        $('#city').css('border','1px solid green')
                        $('title').text(arr.name+' Weather')
                        html = ""
                        html += '<div class="text-center mb-4"><h2>City: '+arr.name+' ('+arr.sys.country+')'+'</h2>'
                        html += '<h4>Latitude: '+parseFloat(arr.coord.lat).toFixed(2)+'&deg'+'&nbsp; Longitude: '+parseFloat(arr.coord.lon).toFixed(2)+'&deg'+'</h4></div>'
                        html += '<table class="table table-bordered">'
                        html += '<tr><th>Weather Type</th><td>'+arr.weather[0].main+'&nbsp;'+'<img src="http://openweathermap.org/img/w/'+arr.weather[0].icon+'.png'+'">'+'</td></tr>'
                        html += '<tr><th>Temerature</th><td><ul>'+'<li>Real: '+(parseFloat(arr.main.temp)-273).toFixed(1)+'&deg; C'+'</li>'+'<li>Feels like: '+(parseFloat(arr.main.feels_like)-273).toFixed(1)+'&deg; C'+'</li>'+'<li>Minimum: '+(parseFloat(arr.main.temp_min)-273).toFixed(1)+'&deg; C'+'</li>'+'<li>Maximum: '+(parseFloat(arr.main.temp_max)-273).toFixed(1)+'&deg; C'+'</li>'+'</ul></td></tr>'
                        html += '<tr><th>Air Pressure</th><td>'+arr.main.pressure+' hPa'+'</td></tr>'
                        html += '<tr><th>Humidity</th><td>'+arr.main.humidity+'%'+'</td></tr>'
                        html += '<tr><th>Visibility</th><td>'+(parseFloat(arr.visibility)/1000)+' km'+'</td></tr>'
                        html += '<tr><th>Wind</th><td>'+parseFloat(arr.wind.speed).toFixed(2)+' km/hr'+'</td></tr>'
                        html += '</table>'
                        $('#result').html(html)
                   }
                },
                error: function(){
                    console.log('internal server error')
                }
            })
        }
    });
});