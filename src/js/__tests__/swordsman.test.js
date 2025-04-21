import Swordsman from "../swordsman";

test('creating a new Swordsman character', () => {
  const result = new Swordsman('Sword');
  expect(result).toEqual({
    name: 'Sword',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});