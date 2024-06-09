const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
    console.log("token", token);
    return token;
};

module.exports = generateToken;