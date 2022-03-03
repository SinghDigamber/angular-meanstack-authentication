const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch (error) {
        res.status(401).json({ message: "No token provided" });
    }
};