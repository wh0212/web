var server = require("./server");
var urll = require("./urll");
var route = require("./route");
var head = require("./head");
var houst = {
    '/read':head.read,
    '/add':head.add,
    '/load':head.load,
    '/search':head.search,
    '/del':head.del,
    '/update':head.update,
    '/delsc':head.delsc
}

server.server(urll.urll,route.route,houst)


