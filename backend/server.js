const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const messageRoutes = require('./routes/message.routes')
const userRoutes = require('./routes/user.routes')
const connectToDb = require('./db/connectToDb')
const { app, server } = require('./socket/socket')
const path = require('path')

dotenv.config({ path: '../.env' });

const PORT = process.env.PORT
const projectRoot = path.resolve();

app.use(express.json());
app.use(cors({
    //http://localhost:5173
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(projectRoot, '/client/dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(projectRoot, '/client/dist/index.html'));
});

server.listen(PORT, () => {
    connectToDb();
    console.log(`Running on port: ${PORT}`)
});