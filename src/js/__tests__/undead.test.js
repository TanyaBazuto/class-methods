import Undead from "../undead";

test('creating a new Undead character', () => {
  const result = new Undead('Un');
  expect(result).toEqual({
    name: 'Un',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});