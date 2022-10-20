import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[] | Fighter[] = [];

  constructor(player: Fighter, monsters: SimpleFighter[] | Fighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let lifePlayer = this._player.lifePoints;
    let lifeMonsters = true;

    while (lifePlayer > 0 && lifeMonsters) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
      
      lifeMonsters = this._monsters.some((mon) => mon.lifePoints > 0);
      lifePlayer = this._player.lifePoints;
    }

    return super.fight();
  }
}