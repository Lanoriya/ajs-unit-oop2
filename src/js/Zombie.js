import Character from "./Characters";

export class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.damage = 10;
  }
}