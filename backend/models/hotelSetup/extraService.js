const mongoose = require('mongoose')

const ExtraServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        is_per_night: {
            type: Boolean,
            required: true,
            default: true
        },
        is_one_time: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('extra_service', ExtraServiceSchema, 'extra_services')