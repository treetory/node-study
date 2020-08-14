var express = require('express');
var router = express.Router();
var storeController = require('../controller/store.controller');

/* GET users listing. */
router.get('/deviceAtlas', storeController.getModelName);
router.post('/opticalFlow', storeController.createOpticalFlowTestRecord);
router.post('/screenSize', storeController.addScreenSizeRow);
router.post('/log', storeController.logging);

module.exports = router;
