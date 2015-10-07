var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/odd-sandpiper', function(request, response){
    response.send('odd-sandpiper');
});

app.listen(process.env.PORT || 4000);