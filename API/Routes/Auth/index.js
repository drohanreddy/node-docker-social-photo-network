const Route = require('../../../Common/Route');
const Router = require('../../../Common/Router');
const LoginService = require('./login.service');
class AuthRoute extends Router{
    constructor() {
        super();
        this.Service = new LoginService();
        this.MiddleWares = [];
    }

    routes(){
        return [
            new Route('GET', '/testlogin', [], this.Service.login)
        ]
    }
}

module.exports = AuthRoute;