const { Router } = require("express");

const charactersRoutes = require('./characters.js');
const characterRoutes = require('./character.js');
const episodesRoutes = require('./episodes.js');
const router = Router();

// Configurar los routers
router.use('/characters', charactersRoutes);
router.use('/character', characterRoutes);
router.use('/episodes', episodesRoutes);


module.exports = router;
