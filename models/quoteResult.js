const mongoose = require('mongoose')

const QuoteResultSchema = new mongoose.Schema(
    {
        quoteRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quoteRequest'
        },
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        },
        bookingPolicy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookingPolicy'
        },
        price: {
            type: Number,
            required: true
        },
        isConfirmed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('quoteResult', QuoteResultSchema, 'quoteResults')