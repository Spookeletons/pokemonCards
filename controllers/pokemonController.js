module.exports.viewAll = function(req, res, next) {
    const cards = [{
        name: 'Pikachu',
        type: 'electric',
        hp: 50,
        picture: 'https://forums.pokemmo.eu/uploads/monthly_2021_04/Pikachu.jpg.4beb42244ba209f0492c5543093dee81.jpg',
        ati: 'Gnaw',
        atid: 10,
        atii: 'Lightning Bolt',
        atiid: 50
    },
    {
        name: 'Zapdos',
        type: 'electric',
        hp: 110,
        picture: 'https://images.gameinfo.io/pokemon/256/p145.png',
        ati: 'Thunder',
        atid: 90,
        atii: 'Thunderbolt',
        atiid: 170,
        weakness: null,
        resistance: 'fighting',
        retreat: [2,'normal']
    }];
    res.render('index', {cards});
}