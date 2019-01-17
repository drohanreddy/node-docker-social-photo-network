var express = require('express');
var app = express();

const {
    SelfPosts
} = require('./Routes');
const PORT = process.env.PORT || 8081

app.use('/self', SelfPosts.toRouter());

app.listen(PORT, ()=>{
    console.log('posts server started');
})