const User = require("../models/user.model");
const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });
        res.status(200).json(filteredUsers)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server Error" })
    }
}


module.exports = { getUsersForSidebar }