const { Router } = require('express');
const { Character, Episode } = require('../db');

const router = Router();

router.post('/', async (req, res, next) => {
  const { name, species, origin, image, episodes } = req.body;
  try {
    let character = await Character.create({
      name, species, origin, image
    });
    const charEpisodes = await Episode.findAll({
      where: { name: episodes }
    });
    character.addEpisode(charEpisodes);
    res.send(character);
  } catch (e) {
    next(e)
  }
})

module.exports = router;