import Daemon from "../daemon";

test('creating a new Daemon character', () => {
  const result = new Daemon('Dae');
  expect(result).toEqual({
    name: 'Dae',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});