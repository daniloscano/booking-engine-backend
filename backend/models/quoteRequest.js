const mongoose = require('mongoose')

const QuoteRequestSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true
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
            type: String,
            required: true
        },
        quote_results: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'quote_result'
            }
        ],
        is_confirmed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('quote_request', QuoteRequestSchema, 'quote_requests')