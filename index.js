const app = require('express')();
const fs = require('fs');
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', socket=>{
    console.log('a user connected');
    fs.readFile('test.txt',(err,data)=>{
        if (err) {
            return console.log(err);
        }
        io.emit('read',data.toString());
    });
    socket.on('text', function(text){
        console.log(text);
        fs.writeFile("test.txt", text, function(err) {
            if(err) {
                return console.log(err);
            }
            io.emit('read',text);

        });
    });
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });
});
http.listen(3000, ()=> console.log('listening on *:3000'));
