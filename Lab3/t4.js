function fetchData(val,callback){
    if(val>5){
        const obj={
           msg:"information fetched successfully"

        }
        callback(obj);
    }else{
        callback("failed to retreive information.");

    }
}
function res(obj){
        console.log(obj);
}
fetchData(3,res);
fetchData(13,res);