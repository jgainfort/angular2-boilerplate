import express = require('express');
import heroes = require('./heroes/heroes');

var router: express.Router = express.Router();

router.use('/heroes', heroes);

export = router;
