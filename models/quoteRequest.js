const mongoose = require('mongoose')
const { generateQuoteCode } = require('../utils/quoteRequest')

const QuoteRequestSchema = new mongoose.Schema(
    {
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        daysStay: {
            type: Number,
            required: true
        },
        board: {
            type: String,
            required: true,
            default: 'bb',
            enum: [ 'bb', 'hb', 'fb' ]
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
        quoteResultsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'quoteResult'
            }
        ],
        isConfirmed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

QuoteRequestSchema.pre('save', function(next ) {
    if (!this.code) {
        const createdDate = new Date()
        const yy = String(createdDate.getFullYear()).slice(2)
        const mm = String(createdDate.getMonth() + 1).padStart(2, '0')
        const quoteCode = generateQuoteCode()

        this.code = `${yy}${mm}-${quoteCode}`
    }
    next()
})

module.exports = mongoose.model('quoteRequest', QuoteRequestSchema, 'quoteRequests')