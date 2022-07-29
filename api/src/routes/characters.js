const { Router } = require('express');
const { getAllCharacters } = require('./controllers/controller');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let result = await getAllCharacters();

    res.send(result);
  } catch (e) {
    next(e);
  }
})

module.exports = router;