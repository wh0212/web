var server = require("./server");
var urll = require("./urll");
var route = require("./route");
var file = require("./file");
var porst = {
    '/public':file.read,
    '/register':file.write,
    '/login':file.ready,
    '/logout':file.del,
    '/update':file.update
}
server.server(urll.urll,route.route,porst)