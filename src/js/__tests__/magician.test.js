import Magician from "../magician";

test('creating a new Magician character', () => {
  const result = new Magician('Mag');
  expect(result).toEqual({
    name: 'Mag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});