const express =require('express')
const bodyParser =require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/student',(req,res)=>{
    res.status(200).json('cs403 on backeend')
})
var Port=7000
app.listen(Port,()=>`http://localhost:${Port}`.bold.green)
app.get('/robots.txt',(req,res)=>{
    res.json("burda ne isin var")
})

const student=[
    {
        id: 1,
        name: "Elmir"
    },
    {
        id: 2,
        name: "isa"
    },
    {
        id: 3,
        name: "ferhad"
    },
    {
        id: 4,
        name: "turan"
    }
]
app.get('/',(req,res)=>{
    res.json(student)
})

