const express = require('express')
const application = express()
const cors = require('cors')
const routes = require('./routes')

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({
    extended: true
}))

application.use(routes)

application.all('*', (_req, _res, next) => {
    try {
        throw {
            statusCode: 404,
            message: 'not found'
        }
    } catch (err) {
        next(err)
    }
})

application.use((err, _req, res, _next) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        error: err.message || 'internal server error'
    })
})

module.exports = application
