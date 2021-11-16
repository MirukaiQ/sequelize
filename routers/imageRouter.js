const path = require("path");
const imageRouter = require("express").Router();
const ImageController = require("../controllers/imageControllet")

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

imageRouter.post('/:id', upload.single('image'), ImageController.createImage)


module.exports = imageRouter