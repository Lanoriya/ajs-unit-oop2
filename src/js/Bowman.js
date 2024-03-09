import Character from "./Characters";

export class Bowman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this. defence = 25;
  }
}