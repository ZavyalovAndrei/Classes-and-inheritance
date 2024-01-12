const nameLengthMin = 2;
const nameLengthMax = 10;
const correctType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
    constructor(name, type, health, level, attack, defence) {
        if (name.length < nameLengthMin) {
            throw new Error('Ошибка! Имя "'+ name +'" слишком кототкое, должно быть не менее 2-х символов.')
        } else if (name.length > nameLengthMax){
            throw new Error('Ошибка! Имя "'+ name +'" слишком длинное, должно быть не более 10-и символов.')
        } else{
            this.name = name;
        }
        if (correctType.includes(type)) {
            this.type = type;
        } else {
            throw new Error('Ошибка! '+ type + ' - неизвестный тип персонажа.');
        }
       
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    toString() {
        return (this.type + ' ' + this.name + ' (уровень: ' + this.level + ', здоровье: ' + this.health 
        + ', атака: ' + this.attack + ', защита: ' + this.defence + ')');
    }
}
