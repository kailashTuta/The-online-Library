const express = require('express');
const router = express.Router()
const User = require('../models/User')

router.post('/register', async (req, res) => {
    const { name, email, phone, role, password, cpassword } = req.body

    if (!name || !email || !phone || !role || !password || !cpassword) {
        return res.status(422).json({ error: "Please Enter All Details" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" })
        }
        else {
            const user = new User({ name, email, phone, role, password, cpassword });
            await user.save();
            res.status(200).json({ message: "user registered successfully" })
        }
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please Enter the details" })
        }
        const userLogin = await User.findOne({ email: email })
        if (!userLogin) {
            res.json({ message: "User Not Found" })
        }
        else {
            res.json({ message: "User Logged in Successfully" })
        }

    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router