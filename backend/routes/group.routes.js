const express = require('express')
const protectRoute = require('../middleware/protectRoute')
const { createGroup } = require('../controllers/group.controller')

const router = express.Router()
router.post('/create', protectRoute, createGroup);

module.exports = router;