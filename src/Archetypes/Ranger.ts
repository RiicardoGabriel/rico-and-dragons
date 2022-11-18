import Archetypes from './Archetypes';
import { EnergyType } from '../IEnergy';

class Ranger extends Archetypes {
  private _energy: string;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energy = 'stamina';
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;