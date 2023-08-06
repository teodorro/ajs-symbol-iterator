export default class Character {
  constructor(name, type) {
    if (!(typeof name === 'string' || name instanceof String)) {
      throw new Error('name not string');
    }
    if (name.length < 2) {
      throw new Error('name.length < 2');
    }
    if (name.length > 10) {
      throw new Error('name.length > 10');
    }
    if (!(typeof type === 'string' || type instanceof String)) {
      throw new Error('type not string');
    }
    if (
      type !== 'Bowman'
      && type !== 'Swordsman'
      && type !== 'Magician'
      && type !== 'Daemon'
      && type !== 'Undead'
      && type !== 'Zombie'
    ) {
      throw new Error('unknown type');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defense = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Character is already dead');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defense *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (Number.isNaN(Number(points))) {
      throw new Error('points are not a number');
    }
    if (points < 0) {
      throw new Error('negative points value');
    }
    this.health = Math.max(this.health - points, 0);
  }
}
