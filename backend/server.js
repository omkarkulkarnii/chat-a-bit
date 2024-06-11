const express = require("express")
const { chats } = require("./data/data")
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.get('/', (req,res) => {
    res.send("Api is running")
})

app.get('/api/chats', (req,res) => {
    res.send(chats)
})
app.get('/api/chats/:id', (req,res) => {
    // console.log(req.params.id);
    const singleChat = chats.find( (c) => c._id == req.params.id )
    res.send(singleChat)
})

const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, console.log(`server started on ${PORT}`))
