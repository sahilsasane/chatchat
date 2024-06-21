const express = require('express')
const protectRoute = require('../middleware/protectRoute')
const { createGroup, getGroupMessages, sendMessage } = require('../controllers/group.controller')

const router = express.Router()
router.post('/create', protectRoute, createGroup);
router.get('/:id', protectRoute, getGroupMessages);
router.post('/send/:id', protectRoute, sendMessage);

module.exports = router;