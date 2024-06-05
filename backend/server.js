const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const messageRoutes = require('./routes/message.routes')
const userRoutes = require('./routes/user.routes')
const connectToDb = require('./db/connectToDb')

dotenv.config({ path: '../.env' });
const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectToDb();
    console.log(`Running on port: ${PORT}`)
});