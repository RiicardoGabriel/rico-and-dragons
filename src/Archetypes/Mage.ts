import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private _energy: EnergyType;
  private static instances = 0;
  
  constructor(_name: string) {
    super(_name);
    this._energy = 'mana';
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
  
  public get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;