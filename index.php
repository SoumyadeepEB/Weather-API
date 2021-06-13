<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World's Current Weather</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body> 
    <div class="container">
        <div class="m-5 p-5 border">
            <h1 class="text-center">World's Current Weather</h1>
            <form>
                <div class="row">
                    <div class="col-md-12 pt-5 pl-5 pr-5">
                        <label><strong>City Name</strong></label>
                        <input type="text" class="form-control" id="city" placeholder="Enter City Name">
                        <span class="text-danger" id="error"></span>
                    </div>
                </div>
            </form>
            <div id="result" class="p-5">
                <div class="row">
                    <div class="col-md-12"><img src="images/weather.png" width="100%" height="400px"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="main.js"></script>
