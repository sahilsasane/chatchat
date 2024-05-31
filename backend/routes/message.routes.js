const express = require('express')
const { sendMessages, getMessages } = require('../controllers/message.controller')
const router = express.Router()
const protectRoute = require('../middleware/protectRoute')

router.post('/send/:id', protectRoute, sendMessages);
router.get('/:id', protectRoute, getMessages)

module.exports = router;