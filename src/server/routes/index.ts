import express = require('express');

var router: express.Router = express.Router();

/* GET home page */
router.get('/', (req: express.Request, res: express.Response, next: Function): void => {
   res.sendFile('index.html');
});

export = router;
