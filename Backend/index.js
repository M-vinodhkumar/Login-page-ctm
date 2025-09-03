const express = require("express")
const cors=require("cors")
const app=express()

var username="vinodh"
var password=123

app.use(cors())
app.get("/login",function(req,res)

{
    console.log(req.query.username,req.query.password)

    if(req.query.username===username && req.query.password==password && req.query.cpword==req.query.password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
}
)


app.listen(5000,function(){
console.log("Server Started....")
})