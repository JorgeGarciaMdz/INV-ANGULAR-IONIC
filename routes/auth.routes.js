const router = require('express').Router();
const User = require('../model/user');
const userService = require('../service/auth.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// params validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    user: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

router.post('/register', async (req, res) => {

    const { invalid } = schemaRegister.validate(req.body);

    if (invalid) {
        return res.status(400).json({
            error: invalid.details[0].message
        });
    }

    if (userService.findByEmail(req.body.email)) {
        return res.status(400).json({
            error: 'email already in use'
        });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        user: req.body.user,
        email: req.body.email,
        password: password
    });

    try {
        userService.create(user);
        res.json({
            error: null,
            user: user
        });

    } catch (e) {
        res.status(400).json({
            error: 'invalid user or password'
        })
    }
});

router.post('/login', async (req, res) => {
    const { invalid } = schemaLogin.validate(req.body);
    if (invalid)
        return res.status(400).json({ error: invalid.details[0].message });

    const user = userService.findByEmail(req.body.email);
    if (!user)
        return res.status(400).json({ error: ' user or password invalid' });

    const validPassword = await bcrypt.compare(req.body.password, user.user.password);
    if (!validPassword)
        return res.status(400).json({ error: ' user or password invalid' });

    const token = jwt.sign({
        user: user.user.user
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token)
        .json({
            error: null,
            data: 'ok'
        });
});

module.exports = router;