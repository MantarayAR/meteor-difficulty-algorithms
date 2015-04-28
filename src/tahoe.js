/**
 * The Tahoe Difficulty Algorithm
 *
 * Based on the Tahoe Network Protocol.  This algorithm
 * will exponentially increase the current difficulty
 * level by the `multiple` given.  Once the difficulty
 * goes about the `threshold` given, the algorithm will
 * switch to adding the `additive` given.
 *
 * When `wrong()` is called, thealgorithm simulates a
 * packet loss, halving the `threshold` and setting
 * the `difficulty` to 0. It will then reset to
 * exponential increase.
 *
 * This algorithm is useful for games that should
 * reset when the player loses, like Flappy Bird or
 * Robot Unicorn Attack.
 */
var Tahoe = function() {
  this.options( ( arguments[0] || {} ) );
};

Tahoe.prototype = new this.DifficultyAlgorithm;
Tahoe.prototype.wrong = function () {
  this._x = 1;
  this._realThreshold = this._realThreshold / 2.0;

  return this._x;
};

this.DifficultyAlgorithm.Tahoe = Tahoe;
