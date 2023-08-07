import Character from '../character';
import Bowman from '../bowman';


// --- constructor ---//

test('constructor throws if name not string', () => {
  expect(() => new Character(123, 'Bowman'))
    .toThrow('name not string');
});

test('constructor throws if name shorter 2', () => {
  expect(() => new Character('a', 'Bowman'))
    .toThrow('name.length < 2');
});

test('constructor throws if name longer 10', () => {
  expect(() => new Character('asdfgasdfgasdfg', 'Bowman'))
    .toThrow('name.length > 10');
});

test('constructor throws if type not string', () => {
  expect(() => new Character('asd', 123))
    .toThrow('type not string');
});

test('constructor throws if type unknown', () => {
  expect(() => new Character('asd', 'asd'))
    .toThrow('unknown type');
});


// --- levelUp ---//

test('levelUp rises level', () => {
  const man = new Bowman('asd');
  man.levelUp();
  expect(man.level).toBe(2);
});

test('levelUp rises attack', () => {
  const man = new Bowman('asd');
  man.levelUp();
  expect(man.attack).toBe(30);
});

test('levelUp rises defense', () => {
  const man = new Bowman('asd');
  man.levelUp();
  expect(man.defense).toBe(30);
});

test('levelUp resets health', () => {
  const man = new Bowman('asd');
  man.levelUp();
  expect(man.health).toBe(100);
});

test('levelUp dont work if health 0', () => {
  const man = new Bowman('asd');
  man.health = 0;
  expect(() => man.levelUp())
    .toThrow('Character is already dead');
});


// --- damage ---//

test('damage reduces health', () => {
  const man = new Bowman('asd');
  man.damage(1);
  expect(man.health).toBe(99);
});

test('damage throws if points not number', () => {
  const man = new Bowman('asd');
  expect(() => man.damage('qwe'))
    .toThrow('points are not a number');
});

test('damage throws if points negative', () => {
  const man = new Bowman('asd');
  expect(() => man.damage(-123))
    .toThrow('negative points value');
});

test('damage health does not become negative', () => {
  const man = new Bowman('asd');
  man.damage(100500);
  expect(man.health).toBe(0);
});
