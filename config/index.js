if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 5001

const HOST = process.env.HOST

module.exports = {
    PORT,
    HOST
}
