const { Heroes } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;

    const newHero = await Heroes.create(body);

    res.send(newHero);

  } catch (error) {
    next(error);
  }
}

module.exports.updateHero = async (req, res, next) => {
  try {
    const {body, params: {id}} = req;

    const [updatedRows, [updatedHero]] = await Heroes.update(body, {
      where: { id },
      returning: true
    });

    res.send(updatedHero);

  } catch (error) {
    next(error);
  }
}

module.exports.deleteHero =  async (req, res, next) => {
  try {
    const {params : {id}} = req;

    const foundHero = await Heroes.findByPk(id);

    await foundHero.destroy();

    res.send(foundHero);
  } catch (error) {
    next(error);
  }
}

module.exports.createImage = async (req, res, next) => {
  try {

    const {
      params : {id},
      file: {filename},
    } = req;

    const [rows, [updatedHero]] = await Hero.update(images,)
   

    res.send({ data: updatedHero });
   }
   catch (error) {
    next(error);
  }
  
};