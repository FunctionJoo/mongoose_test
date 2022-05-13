// serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var request = require('request');

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('localhost:27017/cplog-db');

// DEFINE MODEL
var Book = require('./models/book');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/cypapi', function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");

    const options = {
        url: 'https://api.neople.co.kr/cy/players?nickname=%EC%82%AC%EC%9D%B4%ED%8D%BC%EC%A6%88%EA%B0%9C%ED%95%B5%EB%85%B8%EC%9E%BC&wordType=match&apikey=op0BJXIb0rUOJ0HcUwTyMrcnOQ6zmIXh',
        method: 'GET',
        encoding: null
    }

    request(options, (err, response, body) => {
        res.set('Content-Type', response.headers['content-type']);
        res.send(body);
    })
});

// // CORS
// const cors = require('cors');
// let corsOption = {
//     origin: 'http://localhost:3000',    // 허용 주소
//     credentials: true                   // true시 설정 내용을 응답헤더에 추가해 줌
// }
// app.use(cors(corsOption));              // CORS 미들웨어 추가

// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});