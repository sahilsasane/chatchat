const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const Group = require("../models/group.model");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        // http://localhost:5173
        origin: ["https://chatchat-m052.onrender.com/"],
        methods: ["GET", "POST"],
    },
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", async (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== "undefined") userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server, getReceiverSocketId };