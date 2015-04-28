// Base Difficuly Algorithm tests
Tinytest.add('The Base Algorithm should exist', function ( test ) {
  test.equal( typeof DifficultyAlgorithm, 'function' );
} );

Tinytest.add('The Base Algorithm should have default settings', function ( test ) {
  var difficulty = new DifficultyAlgorithm();

  test.equal( difficulty.options().threshold, 32 );
  test.equal( difficulty.options().multiplier, 1.5 );
  test.equal( difficulty.options().additive, 1 );
} );

Tinytest.add('The Base Algorithm should have default settings that can be overriden', function ( test ) {
  var difficulty = new DifficultyAlgorithm( {
    threshold : 100
  } );

  test.equal( difficulty.options().threshold, 100 );
  test.equal( difficulty.options().multiplier, 1.5 );
  test.equal( difficulty.options().additive, 1 );
} );

Tinytest.add('The Base Algorithm should start at difficulty 1 and the threshold provided', function ( test ) {
  var difficulty = new DifficultyAlgorithm( {
    threshold: 100
  } );
  difficulty.start();

  test.equal( difficulty._x, 1 );
  test.equal( difficulty._realThreshold, 100 );
} );
