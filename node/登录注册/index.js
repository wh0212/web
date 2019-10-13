var server = require("./server");
var urll = require("./urll");
var route = require("./route");
var head = require("./head");
var houst = {
    '/read':head.read,
    '/add':head.add,
    '/btnadd':head.btnadd,
    '/enter':head.enter
}
server.server(urll.urll,route.route,houst);