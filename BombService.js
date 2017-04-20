/**
 * Created by Lena on 20/04/2017.
 */
/**
 * Created by Lena on 17/04/2017.
 */
module.exports= class BombService{
    constructor(){
        this.bombList=[];
    }
    add(bomb){
        this.bombList.push(bomb);
    }
    remove(id) {
        this.bombList.forEach((e,index)=>{
            if(e.id===id){
                this.bombList.splice( index,1);
            }
        });

    };
    find(id){
        return this.bombList.find((e)=>e.id===id);
    }
    getAll(){
        return this.bombList;
    }
};