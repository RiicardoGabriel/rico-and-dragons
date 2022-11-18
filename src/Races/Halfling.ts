import Race from './Race';

class Halfling extends Race {
  private points = 60;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
  
  get maxLifePoints(): number {
    return this.points;
  }
}

export default Halfling;