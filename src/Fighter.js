/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(attacker) {
        attack = Math.random(this.strength)
        defense = Math.random(this.dexterity)
    }
    fight(defender) {
        attack = Math.random(this.strength)
        defense = Math.random(this.dexterity)
    }
}
module.exports = Fighter

/*module.exports = {
    MAX_LIFE: MAX_LIFE,
    Fighter: Fighter,
}*/