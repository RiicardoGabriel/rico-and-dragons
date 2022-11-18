import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get dexterity(): number { return this._dexterity; }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get energy(): Energy {
    const ret = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };

    return ret;
  }

  special?(enemy: Fighter): void {
    enemy.receiveDamage(this._strength + this._dexterity);
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;

    const newLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    if (newLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = newLifePoints;
      this._lifePoints = newLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const remainLifePoints = this._lifePoints - damage;

    if (remainLifePoints <= 0) {
      this._lifePoints = -1;
    } else if (damage > 0) {
      this._lifePoints = remainLifePoints;
    }
    return this._lifePoints;
  }
}