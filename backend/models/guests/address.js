const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema(
    {
        guest_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
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
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('address', AddressSchema, 'addresses')