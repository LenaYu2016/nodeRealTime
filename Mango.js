/**
 * Created by Lena on 05/05/2017.
 */

const Fruit=require('./Fruit.js');
module.exports=class Mango extends Fruit{
    constructor(id,position,type,name){
        super(id,position,name);
        this.type=type;
    }
    energy(user){
        super.energy(user);
        console.log('Mango');
        this.type?user.addBombLevel():user.reduceBombLevel();
    }
};