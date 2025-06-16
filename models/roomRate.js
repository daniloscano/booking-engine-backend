const mongoose = require('mongoose')

const RoomRateSchema = new mongoose.Schema(
    {
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        },
        date: {
            type: Date,
            required: true
        },
        hbPrice: {
            type: Number,
            required: true
        },
        fbPrice: {
            type: Number,
            required: true
        },
        basePrice: {
            type: Number,
            required: true
        },
        basePriceIncrement: {
            type: Number,
            required: true
        },
        extraAdultMultiplier: {
            type: Number,
            required: true
        },
        extraChildMultiplier: {
            type: Number,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('roomRate', RoomRateSchema, 'roomsRates')