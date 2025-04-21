export default class Character {
    constructor(name, type) {
      
        if (typeof name !== 'string') {
            throw new Error ('NAME ERROR: name must be of type "String".');
        } else if (name.length < 2) {
            throw new Error('NAME ERROR: name must contain more than 2 symbol.');
        } else if (name.length > 10) {
            throw new Error('NAME ERROR: name must contain less than 10 symbol.');
        } else {
            this.name = name;
        }
  
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (types.includes(type) === false) {
            throw new Error('TYPE ERROR: type is not defined.');
        } else {
            this.type = type;
        }
    
        this.health = 100;
        this.level = 1;
    }

        levelUp() {
            if (this.health > 0) {
                this.level +=1;
                this.attack = this.attack*1.2;
                this.defence = this.defence*1.2;
                this.health = 100;
            } else {
                throw new Error('LEVEL-UP ERROR: impossible level-up deceased character (health =< 0).');
            }
        }

        damage(points) {
            if (this.health >= 0) {
                this.health -= points * (1 - this.defence / 100);
            } else {
                throw new Error('DAMAGE ERROR: impossible damage deceased character (health < 0).');
            }
        }
}