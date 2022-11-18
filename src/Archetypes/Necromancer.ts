import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energy: string;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energy = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;