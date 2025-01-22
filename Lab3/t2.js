function mul(num,callback){
    callback(num*200);
}

function sub(num,callback){
   callback(num-350);
}

function add(num,callback){
   callback(num+100);
}

mul(2,(res)=>{
   sub(res,(sres)=>{
       add(sres,(ares)=>{ 
      console.log(ares) })
   })
})