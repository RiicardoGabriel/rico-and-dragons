abstract class Race {
  private _name: string;
  private _dexterity: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.instances += 1;
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    if (Race.instances === 0) throw new Error('Not implemented');
    else { return Race.instances; }
  }

  abstract get maxLifePoints(): number;
}

export default Race;