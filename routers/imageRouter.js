const upload = require("../middlewares/multerMDW")
const imageRouter = require("express").Router();
const ImageController = require("../controllers/imageControllet")

imageRouter.post('/', upload.single('image'), ImageController.createImage)


module.exports = imageRouter