/**
 * Created by Lena on 05/05/2017.
 */
const _ = require('lodash'),
    Apple=require('./Apple'),
    Mongo=require('./Mongo');
module.exports=class FruitService{
    constructor(){
        this.fruits=[];
    }
    init(num){
        _.times(num/2,()=>{
            const AId=_.random(60000,70000),
                 MId=_.random(60000,70000),
                 ATop=Math.floor(_.random(615)/15)*15,
                 ALeft=Math.floor(_.random(1115)/15)*15,
                 MTop=Math.floor(_.random(615)/15)*15,
                 MLeft=Math.floor(_.random(1115)/15)*15,
                 Atype=_.sample([true,false]),
                 Mtype=_.sample([true,false]);
            this.fruits.push(new Apple(AId,{top:ATop,left:ALeft},Atype,'apple'));
            this.fruits.push(new Mango(MId,{top:MTop,left:MLeft},Mtype,'mango'));
        });
         console.log(this.fruits);
    }
    getAll(){
        return this.fruits;
    }
};