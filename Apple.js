/**
 * Created by Lena on 05/05/2017.
 */
const Fruit=require('./Fruit.js');
module.exports=class Apple extends Fruit{
    constructor(id,position,type,name){
       super(id,position,name);
        this.type=type;
    }
    energy(user){
        super.energy(user);
        console.log('Apple');
        this.type?user.addSpeed():user.reduceSpeed();
    }
};