import Character from '../character';

test('creating a new character', () => {
  const result = new Character('Char', 'Bowerman');
  expect(result).toEqual({
    name: 'Char',
    type: 'Bowerman',
    health: 100,
    level: 1,
  });
});

test('testing name is a string', () => {
  expect(() => new Character(123, 'Undead')).toThrow('NAME ERROR: name must be of type "String".');
});

test('testing name contains more than 2 symbols', () => {
  expect(() => new Character('D', 'Daemon')).toThrow('NAME ERROR: name must contain more than 2 symbol.');
});

test('testing name contains more than 10 symbols', () => {
    expect(() => new Character('MangledMary', 'Zombie')).toThrow('NAME ERROR: name must contain less than 10 symbol.');
  });

test('testing type matches is expected', () => {
  expect(() => new Character('Mary', 'Zombies')).toThrow('TYPE ERROR: type is not defined.');
});

test('testing character level-up', () => {
  const testCharacter = new Character('Char', 'Bowerman');
  testCharacter.attack = 10;
  testCharacter.defence = 10;
  testCharacter.levelUp();
  expect(testCharacter).toEqual({
    name: 'Char',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12
  });
});

test('testing character level-up for deceased character', () => {
  expect(() => {
    const testCharacter = new Character('Char', 'Bowerman');
    testCharacter.health = 0;
    testCharacter.levelUp();
  }).toThrow('LEVEL-UP ERROR: impossible level-up deceased character (health =< 0).');
});

test('testing character damage', () => {
  const testCharacter = new Character('Char', 'Bowerman');
  testCharacter.defence = 10;
  testCharacter.damage(10);
  expect(testCharacter).toEqual({
    name: 'Char',
    type: 'Bowerman',
    health: 91,
    level: 1,
    defence: 10,
  });
});

test('testing character damage for deceased character', () => {
  expect(() => {
    const testCharacter = new Character('Char', 'Bowerman');
    testCharacter.health = -1;
    testCharacter.damage(10);
  }).toThrow('DAMAGE ERROR: impossible damage deceased character (health < 0).');
});
