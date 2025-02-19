const http=require('http')
const path=require('path')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        const filepath=path.join(__dirname,"values.json")
        fs.readFile(filepath,(err,data)=>
        {
            if(err)
            {
                res.write("404 Not found")
                res.end()
            }
            else{
                const json=JSON.parse(data)
                res.write(JSON.stringify(json))
                res.end()
            }
        })
    }
})
server.listen(3000,()=>{console.log("Server is started")})