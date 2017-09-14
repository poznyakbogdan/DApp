let express = require('express');
let router = express.Router();
const ContractsController = require('../controllers/ContractsController');

/* GET home page. */
router.get('/', (req, res) => {
  res.sendfile('index.html', {
    root: process.env.NODE_PATH + "/frontend"
  });
});

router.post('/compile', (req, res) => {
  ContractsController.compile(req, res);
});

module.exports = router;
