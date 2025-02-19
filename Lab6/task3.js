const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('D:/22B81A05DV/FSD/FSD_LAB/Lab6/index.html','UTF-8',(err,val)=>{
            if(err){
                console.error('error',err);
            }
            else{
                res.write(val);
                res.end();
            }
        });
    }
})
server.listen(4000,()=>{
    console.log("Server connected")
})