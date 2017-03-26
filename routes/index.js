var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
    res.render('index', {
        title: 'Suitup UI Toolkit',
        isProduction: (process.env.NODE_ENV == "production")
    });
});

module.exports = router;
