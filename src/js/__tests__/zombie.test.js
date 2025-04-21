import Zombie from "../zombie";

test('creating a new Zombie character', () => {
  const result = new Zombie('Zomb');
  expect(result).toEqual({
    name: 'Zomb',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});