import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;