/**
 * Created by Lena on 17/04/2017.
 */
const Fruit=require('./Fruit.js');
module.exports= class User{
    constructor(position,sd,speed=1,bombLevel=1){
        this.position=position;
        this.socketId=sd;
        this.speed=speed;
        this.bombLevel=bombLevel;
    }
    addSpeed(speed=0.5){
        this.speed=this.speed*speed;
    }
    addBombLevel(bombLevel=1){
        this.bombLevel=this.bombLevel+bombLevel;
    }
    reduceSpeed(speed=2){
       this.speed=this.speed*speed;
    }
    reduceBombLevel(bombLevel=1){
        if(this.bombLevel===1){
            this.bombLevel=1;
        }else {
            this.bombLevel -= bombLevel;
        }
    }
    eat(fruit){
       fruit.energy(this);
      // socket.emit('eat',this);
    }
};