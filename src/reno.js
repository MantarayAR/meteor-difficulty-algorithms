/**
 * The Reno Difficulty Algorithm
 *
 * Based on the Reno Network Protocol.  This algorithm
 * will exponentially increase the current difficulty
 * level by the `multiplier` given. Once the difficulty
 * goes above the `threshold` given, the algorithm will
 * switch to adding the `additive` given.
 *
 * When `wrong()` is called, the algorithm simulates a
 * packet loss, halving the current difficulty and
 * resuming the additive increase.
 *
 * This algorithm produces a "sawtooth" pattern, and is
 * useful for generating difficulties for games with
 * checkpoints or games focused on educational problems,
 * like math questions.
 */
var Reno = function () {};

Reno.prototype = new this.DifficultyAlgorithm;
Reno.prototype.wrong = function () {
  this._x = this._x / 2.0;
  this._realThreshold = -1;

  return this._x;
};

this.DifficultyAlgorithm.Reno = Reno;
