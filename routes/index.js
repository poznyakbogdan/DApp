var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendfile('index.html', {
    root: process.env.NODE_PATH + "/frontend"
  });
});

module.exports = router;
