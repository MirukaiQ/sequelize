const { Images, Heroes } = require('../models') 

module.exports.createImage = async (req, res, next) => {
    try {

        const {
            heroInstance,
            file: {filename},
          } = req;

        
        const newImage = await heroInstance.createImage({image : filename})

        res.send(newImage)
    } catch (error) {
      next(error)
    }
  }