const express = require('express')
require('dotenv').config()
const cors = require('cors')
const databaseConnection = require('./config/database')
const PORT = process.env.PORT || 9099

const roomTypeRoute = require('./routes/roomType.route')
const errorHandler = require('./middlewares/errorHandler')

const server = express()
server.use(express.json())
server.use(cors())

server.use("/room-type", roomTypeRoute)
server.use(errorHandler)

databaseConnection()


server.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})