const mongoose = require('mongoose')

const RoomRateSchema = new mongoose.Schema(
    {
        room_type: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        only_room_price: {
            type: Number,
            required: true
        },
        half_board_price: {
            type: Number,
            required: true
        },
        full_board_price: {
            type: Number,
            required: true
        },
        base_quota_price: {
            type: Number,
            required: true
        },
        quota_price_increment: {
            type: Number,
            required: false
        },
        quota_price: {
            type: Number,
            required: true
        },
        extra_adult_quota: {
            type: Number,
            required: true
        },
        extra_child_quota: {
            type: Number,
            required: true
        }
    }, { timestamp: true, strict: true }
)

module.exports = mongoose.model('room_rate', RoomRateSchema, 'room_rates')