export default class Character {
  constructor(name, type) {
    if (typeof name === "string" && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Ошибка длинны имени");
    }
    if (
      type === "Bowman" ||
      type === "Swordsman" ||
      type === "Magician" ||
      type === "Daemon" ||
      type === "Undead" ||
      type === "Zombie"
    ) {
      this.type = type;
    } else {
      throw new Error("Нет такого типа");
    }
    this.health = 100;
    this.level = 1;
    switch (type) {
      case "Bowman":
      case "Undead":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Swordsman":
      case "Zombie":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Magician":
      case "Daemon":
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        break;
    }
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

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}
