const heroRouter = require("express").Router();
const imageRouter = require('./imageRouter')
const HeroController = require("../controllers/heroController");
const { findHero } = require("../middlewares/imageMDW")

heroRouter.post("/", HeroController.createHero);

heroRouter.patch("/:id", HeroController.updateHero);

heroRouter.delete("/:id", HeroController.deleteHero);

heroRouter.post("/:id/images", findHero, imageRouter)

module.exports = heroRouter;
