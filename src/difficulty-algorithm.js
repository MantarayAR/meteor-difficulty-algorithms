/**
 * The Base Difficulty Algorithm Class
 *
 * This algorithm sets and takes care of defaults,
 * options, default start, default step, and default
 * wrong functionality.
 *
 * Start, by default wil set the difficulty to 1.
 *
 * Step, by defauly with multiple the current difficulty
 * by the `multiplier` given and will switch to adding
 * the `additive` given when the difficulty is
 * over the `threshold` given.
 *
 * Wrong, by default will simply call `start()` and
 * reset.
 *
 * Extend this class for your difficulty algorithms.
 */
this.DifficultyAlgorithm = function () {
  this._x = 1;
  this._realThreshold = 32;
  this._defaults = {
    threshold : 32,
    multiplier : 1.5,
    additive : 1
  };
  this._options = {};
  /**
   * @param options Object with threshold, multiplier, or additive
   */
  this.options = function () {
    if ( arguments.length === 0 ) {
      return this._options || this._defaults;
    }

    var options = {};

    if ( typeof arguments === 'object' ) {
      for ( var property in this._defaults ) {
        if ( this._defaults.hasOwnProperty( property ) ) {
          options[property] = arguments[0][property] || this._defaults[property]
        }
      }
    }

    this._options = options;
  };
  this.start = function () {
    this._x = 1;
    this._realThreshold = this._options.threshold;

    return this._x;
  };
  this.wrong = function () {
    this.start();
  };
  this.step = function () {
    // if we are under the threshold, use the multiplier
    if ( this._x < this._realThreshold ) {
      this._x = this._x * this._options.multiplier;
    }
    // if we are over the threshold, use the additive
    else {
      this._x = this._x + this._options.additive;
    }

    return this._x;
  }

  this.options( arguments[0] || {} );
}
