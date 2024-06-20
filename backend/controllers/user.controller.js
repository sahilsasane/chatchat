const User = require("../models/user.model");
const Group = require("../models/group.model");
const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });
        const groups = await Group.find({ members: loggedInUserId }).populate('members', 'fullName profilePicture');
        res.status(200).json({ users: filteredUsers, group: groups });
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server Error" })
    }
}


module.exports = { getUsersForSidebar }