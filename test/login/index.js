const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cb = ()=>console.log(`server is runing `)


app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

app.use('/',express.static((path.join(__dirname,'/public'))))

app.get('/',(req,res)=>res.render('pages/index'))
app.post('/',(req,res)=>{
    const {user,pwd}=req.body
    if(!user ||!pwd) res.send('please enter username and password both')
    else if(user == 'haiqa'){
        if(pwd =='123') res.send(`welcome ${user}`)
        else res.send('enter correct password')
    } 
    else res.send(`enter correct username`)
})

app.listen(port,cb())