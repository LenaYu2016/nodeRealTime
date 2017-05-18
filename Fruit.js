/**
 * Created by Lena on 02/05/2017.
 */
const Bomb=require('./Bomb.js');

module.exports=class Fruit extends Bomb{
    constructor(id,position,name){
        super(id,position);
        this.name=name;
    }
    energy(user){
       console.log('energy',user);
    }
};