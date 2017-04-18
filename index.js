
const app = require('express')(),
      fs = require('fs'),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      User=require('./user.js'),
      UserService=require('./UserService.js'),
      userService=new UserService();
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
    socket.on('explode',(e)=>{
        io.emit('die',e);}
        );
    socket.on('disconnect', ()=>{
        console.log('user disconnected');

    });
    socket.on('login',(me)=>{
   let newuser =new User(me.id,me.position);
  userService.add(newuser);
        socket.broadcast.emit('newuser',newuser);
    });
    socket.on('move',(e)=>{
        userService.find(e.id).position=e.position;
        socket.broadcast.emit('newstep',e);
    });
});
http.listen(3000, ()=> console.log('listening on *:3000'));
