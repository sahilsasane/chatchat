const Group = require('../models/group.model');
const Message = require('../models/message.model');

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

const getGroupMessages = async (req, res) => {
    try {
        const { id: groupId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }
        let messages = await group.populate("messages");
        // console.log(messages);
        res.status(200).json(messages.messages);

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Error" });
    }
}

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: groupId } = req.params;
        const senderId = req.user._id;
        let group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }
        const newMessage = new Message({
            senderId,
            receiverId: groupId,
            message,
        });
        if (newMessage) {
            group.messages.push(newMessage._id);
        }
        await Promise.all([group.save(), newMessage.save()]);
        //socket here

        res.status(200).json(newMessage);

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { createGroup, getGroupMessages, sendMessage };