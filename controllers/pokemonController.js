const {Pokemon} = require('../models')
module.exports.viewAll = async function(req, res, next) {
    const cards = await Pokemon.findAll();
    res.render('index', {cards});
}