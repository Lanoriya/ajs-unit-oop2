import { Character } from '../Characters';
import { Bowman } from '../Bowman';
import { Swordsman } from '../Swordsman';
import { Magician } from '../Magician';
import { Undead } from '../Undead';
import { Daemon } from '../Daemon';
import { Zombie } from '../Zombie';

describe('Check type, Check lvlup, Check name', () => {
  const characterTypes = [
    { Class: Bowman, type: "Bowman", attack: 25, level: 1 },
    { Class: Swordsman, type: "Swordsman", attack: 40, level: 1 },
    { Class: Magician, type: "Magician", attack: 10, level: 1 },
    { Class: Daemon, type: "Daemon", attack: 10, level: 1 },
    { Class: Undead, type: "Undead", attack: 25, level: 1 },
    { Class: Zombie, type: "Zombie", attack: 40, level: 1 },
  ];

  test('Check type', () => {
    characterTypes.forEach(({ Class, type }) => {
      const personal = new Class("Lanaya", type)
      expect(personal.type).toEqual(type)
    })
  })

  test('Check lvlup', () => {
    characterTypes.forEach(({ Class, type, attack, level }) => {
      const personal = new Class("Lanaya", type);
      personal.levelUp();
      expect(personal.level).toEqual(level + 1);
      expect(personal.attack).toEqual(attack + attack * 0.2);
    })
  })

  test('Check name', () => {
    expect(() => new Daemon("Lanaya")).not.toThrow();
    expect(() => new Daemon("L")).toThrow();
    expect(() => new Daemon("LanayaLanaya")).toThrow();
  })
})
