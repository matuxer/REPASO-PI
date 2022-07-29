const { Router } = require('express');
const { getAllEpisodes } = require('./controllers/controller');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let result = await getAllEpisodes();
    res.send(result);
  } catch (e) {
    next(e);
  }
})  


module.exports = router;