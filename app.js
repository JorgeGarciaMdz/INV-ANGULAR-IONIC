const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const verifyToken = require('./routes/validate.token.router');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// router middlewares
app.use('/api/v1/user', authRoutes);

app.get('/', verifyToken, (req, res) => {
    res.json({
        message: "hi"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server run port ${PORT}`)
});