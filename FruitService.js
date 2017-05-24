/**
 * Created by Lena on 05/05/2017.
 */
const _ = require('lodash'),
    Apple=require('./Apple'),
    Mango=require('./Mango');
module.exports=class FruitService {
    constructor(){

        this.fruits=[];
        this.typeMatch={apple:[{type:true,image:''},{type:false,image:''}]};
    }
    init(num){
        _.times(num/2,()=>{
            const AId=_.uniqueId(),
                 MId=_.uniqueId(),
                 ATop=Math.floor(_.random(675)/15)*15,
                 ALeft=Math.floor(_.random(1175)/15)*15,
                 MTop=Math.floor(_.random(675)/15)*15,
                 MLeft=Math.floor(_.random(1175)/15)*15,
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
    checkArea(position){
       // position.top
        //console.log('position:'+position.top,position.left);
        return this.fruits.find((e)=>(e.position.top-15<position.top)&&(e.position.top+15>position.top)&&
        (e.position.left-15<position.left)&&(e.position.left+15>position.left));
    }
    remove(id){
        this.fruits=this.fruits.filter((e)=>e.id!==id);
    }
};