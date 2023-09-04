var express = require('express')
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path')

const __dirname1 = path.resolve()
app.use(express.static(path.join(__dirname1, '/frontend/build')))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname1, 'frontend', 'build', 'index.html'));
});

//console.log(path.resolve(__dirname1, 'frontend', 'build', 'index.html'))
//console.log(__dirname.replace('backend', 'frontend') + '/build/index.html')

http.listen(process.env.PORT || 3000, function() {
  var host = http.address().address
  var port = http.address().port
  console.log('App listening at http://%s:%s', host, port)
});

io.on('connection', function(socket) {
  console.log('Client connected to the WebSocket');
  console.log(socket)

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('chat message', function(msg) {
    console.log("Received a chat message");
    console.log(msg)
    io.emit('chat message', 'msg');
  });

  
})