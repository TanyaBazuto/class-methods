import Bowerman from "../bowerman";

test('creating a new Bowerman character', () => {
  const result = new Bowerman('Bower');
  expect(result).toEqual({
    name: 'Bower',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});