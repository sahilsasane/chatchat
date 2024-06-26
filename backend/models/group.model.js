const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        members: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }],
            default: []
        },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
                default: [],
            }
        ],
        profilePicture: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;