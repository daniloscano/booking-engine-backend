const mongoose = require('mongoose')

const RoomBedSchema = new mongoose.Schema(
    {
        room_category: {
            type: String,
            required: true
        },
        king_bed: {
            type: Number,
            required: true,
            default: 0
        },
        single_bed: {
            type: Number,
            required: true,
            default: 0
        },
        crib: {
            type: Number,
            required: true,
            default: 0
        },
        bed_setup: {
            type: String,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('room_bed', RoomBedSchema, 'room_beds')