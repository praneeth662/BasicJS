const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in the middleware')
    next(); // Allow the request to continue to the next middleware to the next line otherwise the requests stop with this.
});

app.use((req,res,next) => {
    console.log('in the another middleware')
    res.send('<h1>Hello from praneeth!</h1>')
});


app.listen(4000);
