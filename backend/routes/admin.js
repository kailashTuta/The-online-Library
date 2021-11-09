const express = require('express');
const router = express.Router()
const authenticate = require('../middleware/authenticate')

router.get('/dashboard', authenticate, (req, res) => {
    res.send(req.rootUser)
})

module.exports = router