const mongoose = require('mongoose')

const DocumentSchema = new mongoose.Schema(
    {
        guestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        type: {
            type: String,
            required: true,
            enum: [ 'idCard', 'drivingLicense', 'passport' ]
        },
        number: {
            type: String,
            unique: true,
            required: true
        },
        expireDate: {
            type: Date,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('document', DocumentSchema, 'documents')