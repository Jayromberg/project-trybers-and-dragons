import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instancesQuantity = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instancesQuantity += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instancesQuantity;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}