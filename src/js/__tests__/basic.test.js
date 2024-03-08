import * as Character from '../Characters';

describe('Check type, Check lvlup, Check name', () => {
  const characterTypes = [
    { Class: Character.Bowman, type: "Bowman", attack: 25, level: 1 },
    { Class: Character.Swordsman, type: "Swordsman", attack: 40, level: 1 },
    { Class: Character.Magician, type: "Magician", attack: 10, level: 1 },
    { Class: Character.Daemon, type: "Daemon", attack: 10, level: 1 },
    { Class: Character.Undead, type: "Undead", attack: 25, level: 1 },
    { Class: Character.Zombie, type: "Zombie", attack: 40, level: 1 },
  ];

  test('Check type', () => {
    characterTypes.forEach(({ Class, type }) => {
      const personal = new Class("Lanaya")
      expect(personal.type).toEqual(type)
    })
  })

  test('Check lvlup', () => {
    characterTypes.forEach(({ Class, attack, level }) => {
      const personal = new Class("Lanaya");
      personal.levelUp();
      expect(personal.level).toEqual(level + 1);
      expect(personal.attack).toEqual(attack + attack * 0.2);
    })
  })

  test('Check name', () => {
    expect(() => new Character.Bowman("Lanaya")).not.toThrow();
    expect(() => new Character.Swordsman("L")).toThrow();
    expect(() => new Character.Magician("LanayaLanaya")).toThrow();
  })
})
