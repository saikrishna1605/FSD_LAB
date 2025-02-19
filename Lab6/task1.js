const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('This is root page');
        res.end();
    }
    else if(req.url==='/home'){
        res.write('This is home page');
        res.write('Welcome to Home');
        res.end();
}
    else if(req.url==='/about'){
        res.write('This is about page');
        res.end();
}
    else if(req.url==='/contact'){
        res.write('This is contact page');
        res.end();
}
});
server.listen(4000,()=>{
    console.log("Server connected")
});    