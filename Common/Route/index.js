class Route{
    constructor(method, url, middlewares, serviceHandler){
        this.method = method;
        this.url = url;
        this.middlewares = middlewares;
        this.serviceHandler = serviceHandler;
    }
}
module.exports = Route;