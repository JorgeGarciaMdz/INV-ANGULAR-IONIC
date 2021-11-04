const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(400).json({ error: 'denegade access' });
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (e) {
        console.log('error: ' + e);
        res.status(400).json({error: 'invalid token'});
    }
}

module.exports = verifyToken;