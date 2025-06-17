const mongoose = require('mongoose')
const { generateLayout } = require('../utils/roomLayout')

const RoomBedSchema = new mongoose.Schema(
    {
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        },
        king: {
            type: Number,
            required: true,
            default: 0
        },
        single: {
            type: Number,
            required: true,
            default: 0
        },
        crib: {
            type: Number,
            required: true,
            default: 0
        },
        layout: {
            type: String,
            required: true
        }
    }, { timestamps: true, strict: true }
)

RoomBedSchema.pre('save', async function(next) {
    const roomBed = this

    if (!roomBed.isModified()) {
        return next()
    }

    try {
        roomBed.layout = generateLayout(roomBed.king, roomBed.single, roomBed.crib)

        next()
    } catch (err) {
        next(err)
    }
})

RoomBedSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate()
    const set = update.$set || update

    const king = set.king
    const single = set.single
    const crib = set.crib

    if (!set) {
        return next()
    }

    try {
        const updatedLayout = generateLayout(king ?? 0, single ?? 0, crib ?? 0)

        if (update.$set) {
            update.$set.layout = updatedLayout
        } else {
            update.layout = updatedLayout
        }

        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('roomBed', RoomBedSchema, 'roomsBeds')