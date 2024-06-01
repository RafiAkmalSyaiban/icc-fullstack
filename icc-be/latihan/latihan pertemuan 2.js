import express from "express"

const app = express()
const port = 8000

app.use(express.json())

//get put pacth post delete 

app.get("/",(req, res)=>{
    res.send("hello")
})

app.post("/",(req, res)=>{
    res.send(req.body)
})

app.patch("/:id",(req,res)=>{
    res.send({
        params: req.params.id,
        body: req.body
    })
})

app.delete("/:id",(req, res)=>{
    res.send(req.params.id)
})

app.listen(port, ()=>{
    console.log("App running on port + port")
})
    


import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const port = 8000

const prisma = new PrismaClient()

app.use(express.json())

//get put pacth post delete 

app.get("/registration",async(req, res)=>{

try {
    const response = await prisma.registration.findMany()
    res.status(200).json ( {
        data: response
    })

} catch (error) {
    res.status(500).json({
        message: error.message
     })
}
    
})

app.post("/registrations",(req, res)=>{
    res.send(req.body)
})

app.patch("/registrations:id",(req,res)=>{
    res.send({
        params: req.params.id,
        body: req.body
    })
})

app.delete("/registrations:id",(req, res)=>{
    res.send(req.params.id)
})

app.listen(port, ()=>{
    console.log("App running on port + port")
})
    

import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const port = 8000

const prisma = new PrismaClient()

app.use(express.json())

//get put pacth post delete 

app.get("/registration",async(req, res)=>{


//async await di gunakan untuk menghubungkan dengan yang lain
try {
    const response = await prisma.registration.findMany()
    res.status(200).json ( {
        data: response
    })

} catch (error) {
    res.status(500).json({
        message: error.message
     })
}
    
})

app.post("/registration", async (req, res)=>{
    try {
        const {fullname, nim, email, phoneNumber, address}= req.body

        const response = await prisma.registration.create({
            data :{
                fullname, nim, email, phoneNumber, address 
            }
        })
        res.status(201).json({
            message:"Berhasil mendaftar",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message:error.message 
        })
    }
})

app.patch("/registrations:id",(req,res)=>{
    res.send({
        params: req.params.id,
        body: req.body
    })
})

app.delete("/registrations:id",(req, res)=>{
    res.send(req.params.id)
})

app.listen(port, ()=>{
    console.log("App running on port + port")
})
    