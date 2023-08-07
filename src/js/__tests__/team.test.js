import Team from '../team';
import Bowman from '../bowman';
import Character from '../character';

describe('Team.symbol', () => {
  test('symbol should iterate', () => {
    const team = new Team();
    team.add(new Bowman('qwe'));
    team.add(new Bowman('asd'));
    team.add(new Bowman('zxc'));
    const members = [];

    for (const character of team) {
      members.push(character);
    }

    expect(members.length).toBe(3);
    expect(members.every((member) => member instanceof Character)).toBe(true);
  });

  test('symbol should iterate', () => {
    const team = new Team();
    const members = [];

    for (const character of team) {
      members.push(character);
    }

    expect(members.length).toBe(0);
  });
});

describe('Team.add', () => {
  test('add should add', () => {
    const team = new Team();
    const character = new Bowman('asd');

    team.add(character);

    expect(team.members.includes(character)).toBe(true);
  });

  test('add should throw if not characters', () => {
    const team = new Team();

    expect(() => team.add('character')).toThrow('Illegal argument');
    expect(() => team.add(null)).toThrow('Illegal argument');
  });
});

describe('Team.addAll', () => {
  test('addAll should add', () => {
    const team = new Team();
    const a = new Bowman('aaa');
    const b = new Bowman('bbb');
    const c = new Bowman('ccc');

    team.addAll([a, b, c]);

    expect(team.members.includes(a)).toBe(true);
    expect(team.members.includes(b)).toBe(true);
    expect(team.members.includes(c)).toBe(true);
  });

  test('addAll should throw if not character', () => {
    const team = new Team();
    const a = new Bowman('aaa');
    const c = new Bowman('ccc');

    expect(() => team.addAll('asd')).toThrow('Illegal argument');
    expect(() => team.addAll(null)).toThrow('Illegal argument');
    expect(() => team.addAll([a, 'b', c])).toThrow('Illegal argument');
    expect(() => team.addAll([a, null, c])).toThrow('Illegal argument');
  });
});
