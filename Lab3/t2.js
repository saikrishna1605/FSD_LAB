function mul(num,callback){
    callback(num*2);
}

function sub(num,callback){
   callback(num-3);
}

function add(num,callback){
   callback(num+10);
}

mul(2,(res)=>{
   sub(res,(sres)=>{
       add(sres,(ares)=>{
      console.log(ares) })
   })
})