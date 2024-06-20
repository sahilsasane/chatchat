const Group = require('../models/group.model');


const createGroup = async (req, res) => {
    try {
        console.log('hello');
        const { name, owner, members, icon } = req.body;
        if (name.length < 3) {
            return res.status(400).json({ message: "Group name must be at least 3 characters" });
        }
        if (members.length === 0) {
            return res.status(400).json({ message: "Please select at least one contact" });
        }
        let groupIcon = "https://res.cloudinary.com/ds3sjwxf5/image/upload/v1718910398/group_icon_xtwikm.png"
        const newGroup = new Group({
            name,
            owner,
            members,
            icon: groupIcon
        });
        if (newGroup) {
            await newGroup.save();
            res.status(201).json({ message: "Group created successfully" });
        }
    } catch (e) {
        console.log("Error in controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { createGroup };