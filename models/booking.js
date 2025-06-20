const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
        quoteRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quoteRequest'
        },
        masterGuestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        guestsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'guest'
            }
        ],
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomUnit'
        },
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        daysStay: {
            type: Number,
            required: true
        },
        board: {
            type: String,
            required: true,
            enum: [ 'bb', 'hb', 'fb' ]
        },
        adults: {
            type: Number,
            required: true
        },
        children: {
            type: Number,
            required: true
        },
        infants: {
            type: Number,
            required: true
        },
        totalPeople: {
            type: Number,
            required: true
        },
        policyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookingPolicy'
        },
        price: {
            type: Number,
            required: true
        },
        extraServicesIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'extraService'
            }
        ],
        extraPrice: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        stage: {
            type: String,
            required: true,
            default: 'pending',
            enum: [ 'pending', 'confirmed', 'canceled' ]
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('booking', BookingSchema, 'bookings')