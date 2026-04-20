const express = require('express');
const router = express.Router();
const Building = require('../models/Building');

router.get('/', async (req, res) => {
    const buildings = await Building.find().lean();
    res.json(buildings);
});

module.exports = router;