const mongoose = require('mongoose')

const FloorPlanSchema = new mongoose.Schema(
    {
        room_number: {
            type: String,
            required: true
        },
        room_category: {
            type: String,
            required: true
        },
        room_setup: {
            type: String,
            required: true
        },
        floor: {
            type: Number,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('floor_plan', FloorPlanSchema, 'floor_plans')