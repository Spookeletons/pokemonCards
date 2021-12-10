const {Pokemon} = require('../models')
module.exports.viewAll = async function(req, res, next) {
        const cards = await Pokemon.findAll();
        for(let i=0;i<cards.length;i++){
            let card = cards[i];
            card.typeEnergy=geturl(card.energy);
            card.atie1=geturl(card.atie1);
            card.atie2=geturl(card.atie2);
            card.atie3=geturl(card.atie3);
            card.atiie1=geturl(card.atiie1);
            card.atiie2=geturl(card.atiie2);
            card.atiie3=geturl(card.atiie3);
            card.weakness=geturl(card.weakness);
            card.resistance=geturl(card.resistance);
            card.retreat=geturl(card.retreat);
        }
        res.render('index', {cards});
}
function geturl(energy){
    if(energy==='electric'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png';
    }else if(energy==='normal'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/2048px-Pok%C3%A9mon_Normal_Type_Icon.svg.png';
    }else if(energy==='water'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png';
    }else if(energy==='fire'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/2048px-Pok%C3%A9mon_Fire_Type_Icon.svg.png';
    }else if(energy==='grass'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/768px-Pok%C3%A9mon_Grass_Type_Icon.svg.png';
    }else if(energy==='ice'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/2048px-Pok%C3%A9mon_Ice_Type_Icon.svg.png';
    }else if(energy==='fighting'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/800px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png';
    }else if(energy==='poison'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1200px-Pok%C3%A9mon_Poison_Type_Icon.svg.png';
    }else if(energy==='ground'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1200px-Pok%C3%A9mon_Ground_Type_Icon.svg.png';
    }else if(energy==='flying'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1024px-Pok%C3%A9mon_Flying_Type_Icon.svg.png';
    }else if(energy==='psychic'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/2048px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png';
    }else if(energy==='bug'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/2048px-Pok%C3%A9mon_Bug_Type_Icon.svg.png';
    }else if(energy==='rock'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png';
    }else if(energy==='ghost'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png';
    }else if(energy==='dragon'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/512px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png';
    }else if(energy==='dark'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/512px-Pok%C3%A9mon_Dark_Type_Icon.svg.png';
    }else if(energy==='steel'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/512px-Pok%C3%A9mon_Steel_Type_Icon.svg.png';
    }else if(energy==='fairy'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/512px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png';
    }else{
        return '';
    }
}