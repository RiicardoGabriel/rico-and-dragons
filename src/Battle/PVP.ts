import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _p1: Fighter, private _p2: Fighter) {
    super(_p1);
    super.fight();
  }

  fight(): number {
    if (this._p1.lifePoints > 0 && this._p2.lifePoints > 0) {
      this._p1.attack(this._p2);
      this._p2.attack(this._p1);
    }
    if (this._p1.lifePoints === -1) {
      return -1;
    } 
    return 1;
  }
}

export default PVP;