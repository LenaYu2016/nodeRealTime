/**
 * Created by Lena on 28/04/2017.
 */
BombService=require('./BombService');
module.exports=class ExplodeBombService extends BombService {
    constructor() {
        super();
    }

    remove(eid1, eid2) {
        this.bombList = this.bombList.filter((e) =>
            e.e1.id !== eid1 || e.e2.id !== eid2
        );
    };

    find(eid1, eid2) {
        return this.bombList.find((el)=>el.e1.id===eid1&&el.e2.id===eid2);
    }
    checkArea(utop,uleft){
        console.log(utop,uleft);
        console.log(this.bombList);
       return  this.bombList.find(e=>{
           console.log(parseInt(e.e1.w),parseInt(e.e2.h));
           let c1=(parseInt(e.e1.top)-15<utop)&&(parseInt(e.e1.top)+15>utop)&&(uleft>parseInt(e.e1.left)-15)&&((parseInt(e.e1.left)+parseInt(e.e1.w))>uleft);
           let c2=(parseInt(e.e2.left)-15<uleft)&&(parseInt(e.e2.left)+15>uleft)&&(utop>parseInt(e.e2.top)-15)&&((parseInt(e.e2.top)+parseInt(e.e2.h))>utop);
           return c1||c2;
        });

    }
};