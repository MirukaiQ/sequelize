const heroRouter = require("express").Router();
const imageRouter = require("./imageRouter")
const HeroController = require("../controllers/heroController");
const { findHero } = require("../middlewares/imageMDW")
const upload = require("../middlewares/multerMDW")

heroRouter.post("/", upload.single("image"), HeroController.createHero);

heroRouter.patch("/:id", HeroController.updateHero);

heroRouter.delete("/:id", HeroController.deleteHero);

heroRouter.use("/:id/images", findHero, imageRouter)

module.exports = heroRouter;
