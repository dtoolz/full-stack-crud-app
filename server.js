var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var todos = require('./routes/todos');
var cors = require('cors');


var app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use("/api", todos);

app.listen(3000, function(){
    console.log('dtoolz server working');
});