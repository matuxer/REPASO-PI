const { Router } = require('express');
const { Character } = require('../db');

const router = Router();

router.post('/', async (req, res, next) => {
  const { name, species, origin, image } = req.body;
  try {
    let character = await Character.create({
      name, species, origin, image
    });
    res.send(character);
  } catch (e) {
    next(e)
  }
})

module.exports = router;