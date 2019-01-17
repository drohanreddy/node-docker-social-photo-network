var express = require('express');
var app = express();
const http = require('http');
const {
    LoginRoute
} = require('./Routes');

const PORT = process.env.PORT || 8081;

app.get('/', (req, res)=> {
    var url = process.env.POSTS_API+'/self/get-self';
    console.log(url);
    http.get(url, (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(JSON.parse(data));
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
      res.send('Hit');
})

app.use('/login', LoginRoute.toRouter());

app.listen(PORT, ()=>{
    console.log('server started');
    console.log(process.env.POSTS_API);
})