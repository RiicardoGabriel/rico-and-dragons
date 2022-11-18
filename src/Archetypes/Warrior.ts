import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

class Warrior extends Archetypes {
  private _energy: string;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energy = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;