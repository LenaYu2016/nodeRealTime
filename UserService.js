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
};