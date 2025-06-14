const mongoose = require('mongoose')

const FloorPlanSchema = new mongoose.Schema(
    {
        room_number: {
            type: String,
            required: true
        },
        room_type_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'room_type'
        },
        floor: {
            type: Number,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('floor_plan', FloorPlanSchema, 'floor_plans')