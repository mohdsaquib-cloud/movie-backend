const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/upload', function(req, res) {  
  res.send('submitted');
});

module.exports = router;