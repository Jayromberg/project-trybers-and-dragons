import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesQuantity += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._instancesQuantity; 
  }
}