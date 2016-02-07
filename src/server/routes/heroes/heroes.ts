import express = require('express');
var mockHeroes = require('../../data/mock-heroes.json');

var router: express.Router = express.Router();

router.get('/all', (req: express.Request, res: express.Response, next: (err?: Error) => void) => {
    res.status(200);
    res.send(mockHeroes);
});

export = router;
