import Archetypes from './Archetypes';
import { EnergyType } from '../IEnergy';

class Mage extends Archetypes {
  private _energy: string;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energy = 'mana';
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;