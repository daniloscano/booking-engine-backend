const roomTypeService = require('../services/roomType.service')

const create = async (req, res, next) => {
    const {body} = req

    try {
        const roomType = await roomTypeService.create(body)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomType ${roomType._id} created successfully!`,
                    ...(process.env.NODE_ENV === 'dev' && { roomType })
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    create
}