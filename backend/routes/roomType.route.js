const express = require('express')
const roomTypeController = require('../controllers/roomType.controller')

const roomType = express.Router()

roomType.post("/create", roomTypeController.create)

module.exports = roomType