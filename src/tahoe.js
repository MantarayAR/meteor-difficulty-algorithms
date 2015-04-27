var Tahoe = {
  _x : 1,
  _realThreshold : 32,
  _defaults : {
    threshold : 32,
    multiplier : 1.5,
    additive : 1
  },
  _options : {},
  options : function () {
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
  },
  start : function () {
    this._x = 1;
    this._realThreshold = this._options.threshold;

    return this._x;
  },
  wrong : function () {
    this._x = 1;
    this._realThreshold = this._realThreshold / 2.0;

    return this._x;
  },
  step : function () {
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
}

// Tahoe.options( {
//   threshold : 32,
//   multiplier : 1.5,
//   additive : 1
// } )
// var difficulty = Tahoe.start();
// document.write( difficulty + '<br/>' );

// for ( var i = 0; i < 25; i++ ) {
//   if ( i == 18 ) {
//     Tahoe.wrong();
//   }

//   difficulty = Tahoe.step();
//   document.write( difficulty + '<br/>' );
// }
