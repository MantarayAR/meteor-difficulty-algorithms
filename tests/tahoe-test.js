// Tahoe tests
Tinytest.add('The Tahoe Algorithm should exist', function ( test ) {
  test.equal( typeof DifficultyAlgorithm, 'function' );
  test.equal( typeof DifficultyAlgorithm.Tahoe, 'function' );
} );

Tinytest.add('The Tahoe Algorithm should have default settings', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe();

  test.equal( difficulty.options().threshold, 32 );
  test.equal( difficulty.options().multiplier, 1.5 );
  test.equal( difficulty.options().additive, 1 );
} );

Tinytest.add('The Tahoe Algorithm should have default settings that can be overriden', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe( {
    threshold : 100
  } );

  test.equal( difficulty.options().threshold, 100 );
  test.equal( difficulty.options().multiplier, 1.5 );
  test.equal( difficulty.options().additive, 1 );
} );

Tinytest.add('The Tahoe Algorithm should start at difficulty 1 and the threshold provided', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe( {
    threshold: 100
  } );
  difficulty.start();

  test.equal( difficulty._x, 1 );
  test.equal( difficulty._realThreshold, 100 );
} );

Tinytest.add('The Tahoe Algorithm should be multiplicative under the threshold', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe();
  difficulty.start();

  test.equal( difficulty._x, 1 );

  difficulty.step();

  test.equal( difficulty._x, 1.5 );
} );

Tinytest.add('The Tahoe Algorithm should be additive over the threshold', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe( {
    threshold : 10
  } );
  difficulty.start();

  difficulty._x = 11;
  test.equal( difficulty._x, 11 );
  difficulty.step();
  test.equal( difficulty._x, 12 );
} );

Tinytest.add('The Tahoe Algorithm should reset the difficulty and half the threshold', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe();
  difficulty.start();

  test.equal( difficulty._x, 1 );

  difficulty.step();
  difficulty.step();

  test.equal( difficulty._x, 2.25 );

  difficulty.wrong();

  test.equal( difficulty._x, 1 );

  difficulty.step();

  test.equal( difficulty._x, 1.5 );
} );

Tinytest.add('The Tahoe Algorithm should reset the difficulty and half the threshold when over the threshold', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe( {
    threshold : 10
  } );
  difficulty.start();

  difficulty._x = 11;
  test.equal( difficulty._x, 11 );
  difficulty.step();
  test.equal( difficulty._x, 12 );

  difficulty.wrong();

  test.equal( difficulty._x, 1 );

  difficulty.step();

  test.equal( difficulty._x, 1.5 );
} );

Tinytest.add('The Tahoe Algorithm should not go under 1 difficulty', function ( test ) {
  var difficulty = new DifficultyAlgorithm.Tahoe();
  difficulty.start();

  test.equal( difficulty._x, 1 );
  difficulty.wrong();
  test.equal( difficulty._x, 1 );
  difficulty.wrong();
  test.equal( difficulty._x, 1 );
} );