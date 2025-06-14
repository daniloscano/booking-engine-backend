const mongoose = require('mongoose')

const QuoteResultSchema = new mongoose.Schema(
    {
        quote_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quote_request'
        },
        room_type: {
            type: String,
            required: true
        },
        room_category: {
            type: String,
            required: true
        },
        booking_policy: {
            type: String,
            required: true
        },
        is_confirmed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('quote_result', QuoteResultSchema, 'quote_results')