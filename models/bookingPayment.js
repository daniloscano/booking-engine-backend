const mongoose = require('mongoose')
const {mongo} = require("mongoose");

const BookingPaymentSchema = new mongoose.Schema(
    {
        bookingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        },
        amount: {
            type: Number,
            required: true
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false
        },
        completedDate: {
            type: Date,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('bookingPayment', BookingPaymentSchema, 'bookingPayments')