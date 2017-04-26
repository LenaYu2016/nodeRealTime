
const app = require('express')(),
      fs = require('fs'),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      _ = require('lodash'),
      User=require('./user.js'),
      Bomb=require('./Bomb.js'),
      UserService=require('./UserService.js'),
      BombService=require('./BombService.js'),
      userService=new UserService(),
      bombService=new BombService();
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket=>{
    console.log('a user connected');
    socket.emit('getId',socket.id);
    socket.emit('load',userService.getAll());
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
        userService.remove(socket.id);
        socket.broadcast.emit('leave',socket.id);
    });
    socket.on('login',(me)=>{
      let newuser =new User(me.position,socket.id);
      userService.add(newuser);
      socket.broadcast.emit('newuser',newuser);
    });
    socket.on('move',(e)=>{
        userService.find(e.sd).position=e.position;
        socket.broadcast.emit('newstep',userService.find(e.sd));
    });
    socket.on('bomb',(e)=>{
        bombService.add(e.id,{top:e.position.top,left:e.position.left});
        socket.broadcast.emit('newbomb',e);
    });
});
http.listen(3000, ()=> console.log('listening on *:3000'));
