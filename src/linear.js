/**
 * The Linear Difficulty Algorithm
 *
 * Not based on a network protocol.  This algorithm simply
 * resets at half the current difficulty and progresses linearly.
 *
 * Only the additive is used in this algorithm.
 */

var Linear = function () {
  this.options( ( arguments[0] || {} ) );
};

Linear.prototype = new this.DifficultyAlgorithm;
Linear.prototype.step = function () {
  this._x = this._x + this._options.additive;

  return this._x;
}
Linear.prototype.wrong = function () {
  this._x = this._x / 2.0;

  if ( this._x < 1 ) {
    this._x = 1;
  }

  return this._x;
}

this.DifficultyAlgorithm.Linear = Linear;
