const express = require('express');
const router = express.Router();

// Home page
router.get('/', async(req, res, next) => {
    res.render('index', {});
})

module.exports = router