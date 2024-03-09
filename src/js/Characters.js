export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === "string" && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Ошибка длинны имени");
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Нет такого типа");
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level++;
      this.attack = (this.attack / 100) * 20 + this.attack;
      this.defence = (this.defence / 100) * 20 + this.defence;
      this.health = 100;
      return;
    } else {
      throw new Error("Нельзя повысить лвл умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
