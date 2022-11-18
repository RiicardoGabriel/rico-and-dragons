import Race from './Race';

class Elf extends Race {
  private points = 99;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
  
  get maxLifePoints(): number {
    return this.points;
  }
}

export default Elf;