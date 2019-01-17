
const Router = require('../../../Common/Router')
const Route = require('../../../Common/Route')
const SelfPostsService = require('./self-posts');
class SelfPostsRouter extends Router{
    constructor(){
        super();
        this.Service = new SelfPostsService();
        this.MiddleWares = [];
    }

    routes(){
        return [
            new Route("get","/get-self", [], this.Service.getSelfPosts)
        ];
    }
}

module.exports = SelfPostsRouter;