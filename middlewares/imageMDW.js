const { Heroes } = require('../models');

module.exports.findHero = async(req,res,next) => {
  try {
    const { params: {id}} = req;

    const heroInstance = await Heroes.findByPk(id);

    if(!heroInstance) {
      throw new Error('404. User not Found')
    }

    req.heroInstance = heroInstance;

    next();
  } catch (error) {
    next(error);
  }
}