import Race from './Race';

class Orc extends Race {
  private points = 74;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
  
  get maxLifePoints(): number {
    return this.points;
  }
}

export default Orc;