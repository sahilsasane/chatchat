const express = require('express')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth.routes')
const connectToDb = require('./db/connectToDb')

dotenv.config({ path: '../.env' });
const app = express()
const PORT = process.env.PORT

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToDb();
    console.log(`Running on port: ${PORT}`)
});