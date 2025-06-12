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
        master_guest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        guests: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'guest'
            }
        ],
        room_type: {
            type: String,
            required: true
        },
        room_category: {
            type: String,
            required: true
        },
        room_number: {
            type: Number,
            required: false
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
        price: {
            type: Number,
            required: true
        },
        deposit_paid: {
            type: Boolean,
            required: true,
            default: false
        },
        deposit_paid_date: {
            type: Date,
            required: false
        }
    }, { timestamps: true, strict: true}
)

module.exports = mongoose.model('booking', BookingSchema, 'bookings')