export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(attackPoints: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}