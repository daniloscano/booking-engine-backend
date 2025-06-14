const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            default: 'user',
            enum: [ 'admin', 'manager', 'staff', 'user' ]
        },
        guest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        }
    }, { timestamps: true, strict: true }
)

UserSchema.pre('save', async function(next) {
    const user = this

    if (!user.isModified('password')) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        next()
    } catch (err) {
        next(err)
    }
})

UserSchema.pre('updateOne', async function(next) {
    const update = this.getUpdate()

    if (!update || !update.password) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        update.password = await bcrypt.hash(update.password, salt)
        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('user', UserSchema, 'users')