const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema(
    {
        booking_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        },
        is_master: {
            type: Boolean,
            required: true,
            default: false
        },
        first_name: {
            type: String,
            required: true,
            max: 40
        },
        last_name: {
            type: String,
            required: true,
            max: 80
        },
        email: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: true,
            enum: [ 'male', 'female' ]
        },
        date_of_birth: {
            type: Date,
            required: true
        },
        address_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address'
        },
        identity_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'identity'
        },
        vat_number: {
            type: String,
            required: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('guest', GuestSchema, 'guests')