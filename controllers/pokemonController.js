const {Pokemon} = require('../models')
module.exports.viewAll = async function(req, res, next) {
        const cards = await Pokemon.findAll();
        await Pokemon.update(
            {
                typeEnergy:geturl(cards.energy),
                atie1:geturl(atie1),
                atie2:geturl(atie2),
                atie3:geturl(atie3),
                atiie1:geturl(atiie1),
                atiie2:geturl(atiie2),
                atiie3:geturl(atiie3)
            }
        )
        res.render('index', {cards});
}
function geturl(energy){
    if(energy==='electric'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png';
    }else if(energy==='normal'){
        return 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fmaskadra42%2Fart%2FNormal-type-energy-symbol-363464565&psig=AOvVaw2u5TPILSa8WbMIHCzkBsX_&ust=1639066708560000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPjk6rnN1PQCFQAAAAAdAAAAABAD';
    }else if(energy==='water'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3fi-85063943-452c-4b80-8db1-5cf8ff52df52.png/v1/fill/w_720,h_720,strp/water_energy_by_humac1_d50w3fi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M2ZpLTg1MDYzOTQzLTQ1MmMtNGI4MC04ZGIxLTVjZjhmZjUyZGY1Mi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.O2U4tlDOemWLgvqL3wSepEZtNzJQl8iXwy1BJmQEubY';
    }else if(energy==='fire'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png/v1/fill/w_720,h_720,strp/fire_energy_by_humac1_d50w437-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDM3LTMxNWEzNGM0LTg1YzItNGQwNy1hZTRkLTZiNDJhMjUyMzNiZi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9MXJnu8IXMxIGYcRKIg-sfxBAcqfIptXg_uw_OqM3wo';
    }else if(energy==='grass'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w40k-75281ddb-5dc8-4eb8-9321-d5c901815eed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQway03NTI4MWRkYi01ZGM4LTRlYjgtOTMyMS1kNWM5MDE4MTVlZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yGkym2UfwaoUVHBldwSE9pHM9Y0tgJMSzvVGLEh6HDI';
    }else if(energy==='ice'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c938f85-f834-4bb3-b3b2-97d295769464/d9g2ymo-7c0a7158-126b-4496-89d6-fdf7e137aa20.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjOTM4Zjg1LWY4MzQtNGJiMy1iM2IyLTk3ZDI5NTc2OTQ2NFwvZDlnMnltby03YzBhNzE1OC0xMjZiLTQ0OTYtODlkNi1mZGY3ZTEzN2FhMjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b0RFs92G_NcBBVEDZSj5RmlqoeCkO8m1OrbE9D1JGvc';
    }else if(energy==='fighting'){
        return 'https://www.pngkit.com/png/full/353-3532588_pokemon-fighting-type-symbol-pokemon-card-fighting-energy.png';
    }else if(energy==='poison'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1200px-Pok%C3%A9mon_Poison_Type_Icon.svg.png';
    }else if(energy==='ground'){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1200px-Pok%C3%A9mon_Ground_Type_Icon.svg.png';
    }else if(energy==='flying'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0726fbdd-a6a6-4871-bed6-e8e0b9ce2af0/d608hxm-f2ba2e1b-8e67-4c6a-92fe-db33facf31a2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MjZmYmRkLWE2YTYtNDg3MS1iZWQ2LWU4ZTBiOWNlMmFmMFwvZDYwOGh4bS1mMmJhMmUxYi04ZTY3LTRjNmEtOTJmZS1kYjMzZmFjZjMxYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FxcaHyz_J66t3CFApjxY6RhrxAZgBo5v7xF7XjTZPuI';
    }else if(energy==='psychic'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png/v1/fill/w_720,h_720,strp/psychic_energy_by_humac1_d50w3p6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3A2LWFhOGMzODk0LWQ3YmYtNDUwYi05OWJlLWY2MDhkMTRlMWU0YS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X66lXufkAxkVXIW4UYQjAbHyGeoKZ9pBYVr-q8__wHo';
    }else if(energy==='bug'){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0726fbdd-a6a6-4871-bed6-e8e0b9ce2af0/d607cn9-cfdd9d24-cdf0-469a-9aa4-f9f965861bbf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MjZmYmRkLWE2YTYtNDg3MS1iZWQ2LWU4ZTBiOWNlMmFmMFwvZDYwN2NuOS1jZmRkOWQyNC1jZGYwLTQ2OWEtOWFhNC1mOWY5NjU4NjFiYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q4sZ4jwCuR_xTV_4qC2gfR2e4LaKiSufYNbL2vbe_Zw';
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