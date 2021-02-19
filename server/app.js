const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var coins = {
    coin: 1
}


Socketio.on("connection", socket => {
    socket.emit("coins", coins);
})

Http.listen(3000, () => {
    console.log("Listening at port 3000...")
})