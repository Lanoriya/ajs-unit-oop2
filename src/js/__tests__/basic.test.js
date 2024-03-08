import * as Character from '../Characters';

test('Check type', () => {
  const characterTypes = [
    { Class: Character.Bowman, type: "Bowman" },
    { Class: Character.Swordsman, type: "Swordsman" },
    { Class: Character.Magician, type: "Magician" },
    { Class: Character.Daemon, type: "Daemon" },
    { Class: Character.Undead, type: "Undead" },
    { Class: Character.Zombie, type: "Zombie" },
  ];

  characterTypes.forEach(({ Class, type }) => {
    const personal = new Class(type)
    expect(personal.type).toEqual(type)
  })
})

test('Check name', () => {
  expect(() => new Character.Bowman("Lanaya")).not.toThrow();
  expect(() => new Character.Swordsman("L")).toThrow();
  expect(() => new Character.Magician("LanayaLanaya")).toThrow();
})