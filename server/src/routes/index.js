const { Router } = require('express');
const activityRouter = require('./activity.routes');
const countriesRouter = require('./countries.routes');


const router = Router();

router.use('/countries', countriesRouter);
router.use('/activities', activityRouter);

module.exports = router;