const config = require('../config')
const http = require('http')
const app = require('../app')
const server = http.createServer(app)

server.listen(config.PORT, () => console.log(`server run in ${process.env.NODE_ENV} on port ${config.PORT}`))
