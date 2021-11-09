const express = require('express');
const router = express.Router()
const User = require('../models/User')
const authenticate = require('../middleware/authenticate')

router.get('/dashboard', authenticate, (req, res) => {
    res.send(req.rootUser)
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const { name, email, phone, role, password, cpassword } = req.body


    if (!name || !email || !phone || !role || !password || !cpassword) {
        return res.status(422).json({ error: "Please Enter All Details" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        }
        const user = new User({ name, email, phone, role, password, cpassword });
        await user.save();
        res.status(200).json({ message: "user registered successfully" })
    }
    catch (err) {
        res.json({ message: err })
    }
})

module.exports = router