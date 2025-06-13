const mongoose = require('mongoose')

const RoomTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            max: 5
        },
        category: {
            type: String,
            required: true,
            max: 5
        },
        description: {
            type: String,
            required: true
        },
        amenities: {
            type: String,
            required: true
        },
        dimensions: {
            type: String,
            required: true
        },
        beds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'room_bed'
        },
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'roomService'
            }
        ],
        images: [],
        max_pax: {
            type: Number,
            required: true
        },
        max_adults: {
            type: Number,
            required: true
        },
        max_children: {
            type: Number,
            required: true
        },
        max_infants: {
            type: Number,
            required: true
        },
        has_extra_bed: {
            type: Boolean,
            required: true
        },
        has_crib: {
            type: Boolean,
            required: true
        },
        is_single_use: {
            type: Boolean,
            required: true
        },
        ordinal: {
            type: Number,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('room_type', RoomTypeSchema, 'room_types')