// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});


// Reno tests

// Test existance
Tinytest.add('Test that the Reno Algorithm exists', function ( test ) {
  test.equal( typeof DifficultyAlgorithm, 'function' );
  test.equal( typeof DifficultyAlgorithm.Reno, 'function' );
} );

// Test default settings

// Test that options can be partially overriden

// Test start()

// Test step() under threshold

// Test step() over threshold

// Test wrong() under threshold

// Test wrong() over threshold

// Test wrong() when called multiple times