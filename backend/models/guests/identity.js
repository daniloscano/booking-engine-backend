const mongoose = require('mongoose')

const IdentitySchema = new mongoose.Schema(
    {
        guest_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
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
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('identity', IdentitySchema, 'identities')