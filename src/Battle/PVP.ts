import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    let lifePlayer1 = this._player1.lifePoints;
    let lifePlayer2 = this._player2.lifePoints;

    while (lifePlayer1 > 0 && lifePlayer2 > 0) {
      this._player2.attack(this._player1);
      this._player1.attack(this._player2);
      
      lifePlayer1 = this._player1.lifePoints;
      lifePlayer2 = this._player2.lifePoints;
    }

    return super.fight();
  }
}