import Race from './Race';

class Dwarf extends Race {
  private points = 80;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
  
  get maxLifePoints(): number {
    return this.points;
  }
}

export default Dwarf;