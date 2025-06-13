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
        street: {
            type: String,
            required: false
        },
        zip_code: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        region: {
            type: String,
            required: false
        },
        nation: {
            type: String,
            required: false
        },
        date_of_birth: {
            type: Date,
            required: true
        },
        doc_type: {
            type: String,
            required: false,
            enum: [ 'id_card', 'driving_license', 'passport' ]
        },
        doc_number: {
            type: String,
            required: false
        },
        doc_expire: {
            type: Date,
            required: false
        },
        vat_number: {
            type: String,
            required: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('guest', GuestSchema, 'guests')