import express from "express"
const app= express()
const port=5000

app.use('/api',(req,res)=>{
    return res.json({message:"Hello express app"})
})
app.listen(port,()=>{
    console.log("Server is on ",port);
    
})