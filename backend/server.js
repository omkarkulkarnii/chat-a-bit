const express = require("express")
const { chats } = require("./data/data")
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')
dotenv.config()

connectDB();

app.use(express.json()) //to accept json data
app.get('/', (req,res) => {
    res.send("Api is running")
})



// app.get('/api/chats', (req,res) => {
//     res.send(chats)
// })
// app.get('/api/chats/:id', (req,res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find( (c) => c._id == req.params.id )
//     res.send(singleChat)
// })

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, console.log(`server started on ${PORT}`))
