const Route = require('../Route');
var express = require('express');

class Router{
 constructor(){
     this.Service = {};
     this.MiddleWares = [];
     this.router = express.Router();
 }
  
 routes(){
     throw "Not implemented";
 }

 toRouter(){
     const Routes = this.routes();
     Routes.forEach(route => {
        this.router[route.method.toString().toLowerCase()](route.url, route.serviceHandler);
     });
     return this.router;
 }
    
}

module.exports = Router;