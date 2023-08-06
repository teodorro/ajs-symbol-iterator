import Character from './character';

export default class Team {
  constructor() {
    this.members = [];
    Team.prototype[Symbol.iterator] = () => {
      let index = 0;
      const mems = this.members;
      return {
        next() {
          const res = { value: mems[index], done: index === mems.length };
          index += 1;
          return res;
        },
      };
    };
  }

  add(character) {
    if (character instanceof Character) {
      this.members.push(character);
      return;
    }
    throw new Error('Illegal argument');
  }

  addAll(characters) {
    if (characters == null) {
      throw new Error('Illegal argument');
    }
    if (!Array.isArray(characters)) {
      throw new Error('Illegal argument');
    }
    characters.forEach((character) => this.add(character));
  }
}
