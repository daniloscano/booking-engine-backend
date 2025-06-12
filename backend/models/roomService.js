const mongoose = require('mongoose')

const RoomServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        images: [
            {
                type: String,
                required: true
            }
        ]
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('room_service', RoomServiceSchema, 'room_services')