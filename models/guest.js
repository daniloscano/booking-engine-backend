const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema(
    {
        bookingsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'booking'
            }
        ],
        isMaster: {
            type: Boolean,
            required: true,
            default: false
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address'
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        documentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'document'
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('guest', GuestSchema, 'guests')