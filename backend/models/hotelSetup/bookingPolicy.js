const mongoose = require('mongoose')

const BookingPolicySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        deposit: {
            type: String,
            required: true
        },
        cancellation: {
            type: String,
            required: true
        },
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('booking_policy', BookingPolicySchema, 'booking_policies')