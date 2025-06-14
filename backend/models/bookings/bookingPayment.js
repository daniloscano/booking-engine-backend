const mongoose = require('mongoose')

const BookingPaymentSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        method: {
            type: String,
            required: true,
            enum: [ 'bank_transfer', 'credit_card' ]
        },
        is_paid: {
            type: Boolean,
            required: true,
            default: false
        },
        paid_date: {
            type: Date,
            required: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('booking_payment', BookingPaymentSchema, 'booking_payments')