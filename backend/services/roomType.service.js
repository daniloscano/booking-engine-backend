const RoomType = require('../models/roomsSetup/roomType')

const create = async (body) => {
    const newRoomType = new RoomType(body)
    return await newRoomType.save()
}

module.exports = {
    create
}