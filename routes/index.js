const router = require('express').Router()

router.get('/', (req, res, next) => {
    try {
        res.status(200).send('hello from julian razif figaro')
    } catch (err) {
        next(err)
    }
})

module.exports = router
