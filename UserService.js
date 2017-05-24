/**
 * Created by Lena on 17/04/2017.
 */
module.exports= class UserService{
    constructor(){
        this.userLists=[];
    }
    add(user){
        this.userLists.push(user);
    }
    remove(sd) {
        this.userLists.forEach((e,index)=>{
            if(e.socketId===sd){
                this.userLists.splice( index,1);
            }
        });

    };
   find(id){
       return this.userLists.find((e)=>e.socketId===id);
   }
   getAll(){
       return this.userLists;
   }
   checkBomb(bposition) {
     return this.getAll().filter((e)=>{
         let c1=(parseInt(bposition.e1.top)-15<e.position.top)&&(parseInt(bposition.e1.top)+15>e.position.top)&&(e.position.left>parseInt(bposition.e1.left)-15)&&((parseInt(bposition.e1.left)+parseInt(bposition.e1.w))>e.position.left);
         let c2=(parseInt(bposition.e2.left)-15<e.position.left)&&(parseInt(bposition.e2.left)+15>e.position.left)&&(e.position.top>parseInt(bposition.e2.top)-15)&&((parseInt(bposition.e2.top)+parseInt(bposition.e2.h))>e.position.top);
         return c1||c2;
     }).map(e=>e.socketId);
   }
};
