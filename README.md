# meteor-difficulty-algorithms
Difficulty progression algorithms for use in Meteor

# Examples

In the following code snippet, we will create a Reno Difficulty Algorithm and console log the result that happens if a user "gets all questions correct" or "succeeds in game actions" except for step 9 and 20.

```js
var reno = new DifficultyAlgorithm.Reno();
reno.options( {
  threshold : 10,
  multipler : 2,
  additive : 1
} );
var difficulty = reno.start();
console.log( difficulty );

for ( var i = 0; i < 25; i++ ) {
  if ( i == 9 || i == 20 ) {
    reno.wrong();
  }

  difficulty = reno.step();
  console.log( difficulty );
}
```

Output:

```
1
1.5
2.25
3.375
5.0625
7.59375
11.390625
12.390625
13.390625
14.390625
8.1953125
9.1953125
10.1953125
11.1953125
12.1953125
13.1953125
14.1953125
15.1953125
16.1953125
17.1953125
18.1953125
10.09765625
11.09765625
12.09765625
13.09765625
14.09765625
```

In your game, you may want to make use of `Math.floor` to get an Integer value.

# Tests

Run tests:

```cmd
cd meteor
meteor test-packages ./
```