const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true
        },
        quote_request_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quote_request'
        },
        master_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        guests_ids: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'guest'
            }
        ],
        room_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'floor_plan'
        },
        check_in: {
            type: Date,
            required: true
        },
        check_out: {
            type: Date,
            required: true
        },
        days_stay: {
            type: Number,
            required: true
        },
        board: {
            type: String,
            required: true
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
        total_pax: {
            type: Number,
            required: true
        },
        policy: {
            type: String,
            required: true
        },
        extra_ids: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'extra_service'
            }
        ],
        price: {
            type: Number,
            required: true
        },
        extra_price: {
            type: Number,
            required: true
        },
        total_price: {
            type: Number,
            required: true
        },
        stage:  {
            type: String,
            required: true,
            default: [ 'pending', 'confirmed', 'canceled' ]
        }
    }, { timestamps: true, strict: true}
)

module.exports = mongoose.model('booking', BookingSchema, 'bookings')